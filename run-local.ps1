# File: `run-local.ps1`
param(
    [int]$Port = 8080,
    [string]$ContainerName = "myapp-local",
    [string]$ImageName = "yash4801/myapp:local",
    [switch]$BuildImage  # if set, builds image from Dockerfile and runs it instead of using a volume-mounted nginx
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Write-Host "1/5 - Installing dependencies..."
npm ci

Write-Host "2/5 - Building app..."
npm run build

# detect output directory
$possible = @("dist",".build")
$outDir = $possible | Where-Object { Test-Path -Path (Join-Path (Get-Location) $_) } | Select-Object -First 1

if (-not $outDir) {
    Write-Error "Build output not found. Expected one of: $($possible -join ', ')."
    exit 1
}
Write-Host "Build output found at: $outDir"

# stop & remove existing container if present
if (docker ps -a --format "{{.Names}}" | Select-String -Pattern "^$ContainerName$") {
    Write-Host "Removing existing container: $ContainerName"
    docker rm -f $ContainerName | Out-Null
}

if ($BuildImage) {
    Write-Host "3/5 - Building docker image $ImageName..."
    docker build -t $ImageName . --progress=plain

    Write-Host "4/5 - Running container from image..."
    docker run -d --name $ContainerName -p "$Port`:80" $ImageName | Out-Null
} else {
    Write-Host "3/5 - Running nginx container mounting local build..."
    # use absolute path for volume on Windows
    $hostPath = (Resolve-Path $outDir).Path
    docker run -d --name $ContainerName -p "$Port`:80" -v "$hostPath`:/usr/share/nginx/html:ro" nginx:alpine | Out-Null
}

Start-Sleep -Seconds 1
Write-Host "5/5 - Opening http://localhost:$Port"
Start-Process "http://localhost:$Port"

Write-Host "Done."

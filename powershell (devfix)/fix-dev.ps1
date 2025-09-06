# fix-dev.ps1
param(
    [int]$Port = 3000  # ค่า default = 3000
)

Write-Host "🚀 ASAP Estate Next.js Dev Fix Script" -ForegroundColor Cyan

# 1. Kill node processes
Write-Host "🔴 Killing all node.exe processes..."
taskkill /F /IM node.exe 2>$null

# 2. Remove .next folder (if exists)
Write-Host "🧹 Removing .next folder..."
if (Test-Path ".next") {
    Remove-Item .next -Recurse -Force
    Write-Host "   ✔ .next folder removed"
} else {
    Write-Host "   ℹ No .next folder found, skipping"
}

# 3. Grant permissions (prevent EPERM error)
Write-Host "🔑 Granting full access to current user..."
icacls . /grant "$env:USERNAME:(OI)(CI)F" /T 2>$null | Out-Null

# 4. Start Next.js dev server
Write-Host "⚡ Starting npm run dev on port $Port..."
npm run dev -- -p $Port
# Create a directory to store the exports if it doesn't exist
New-Item -ItemType Directory -Force -Path .\exports

# Function to export files from a directory
function Export-Directory {
    param (
        [string]$dirPath,
        [string]$outputFile
    )
    
    # Get all files in the directory, recursively
    Get-ChildItem -Path $dirPath -File -Recurse | 
    Where-Object { 
        $_.FullName -notlike "*\node_modules\*" -and 
        $_.FullName -notlike "*\.git\*" -and 
        $_.FullName -notlike "*\.next\*" 
    } | 
    ForEach-Object {
        $relativePath = $_.FullName.Replace((Get-Location).Path + "\", "")
        "FILE_START: $relativePath" | Out-File -FilePath $outputFile -Append
        "FILE_CONTENT:" | Out-File -FilePath $outputFile -Append
        Get-Content $_.FullName | Out-File -FilePath $outputFile -Append
        "FILE_END: $relativePath" | Out-File -FilePath $outputFile -Append
        "" | Out-File -FilePath $outputFile -Append
    }
}

# Export major directories separately
$directories = @("app", "components", "public", "sanity")
foreach ($dir in $directories) {
    if (Test-Path -Path .\$dir) {
        $outputFile = ".\exports\${dir}_export.txt"
        "" | Out-File -FilePath $outputFile -Force  # Clear file if it exists
        Export-Directory -dirPath .\$dir -outputFile $outputFile
        Write-Host "Exported $dir to $outputFile"
    }
}

# Export root files
$outputFile = ".\exports\root_export.txt"
"" | Out-File -FilePath $outputFile -Force  # Clear file if it exists
Get-ChildItem -Path . -File | 
Where-Object { 
    $_.Name -notlike ".*" -and 
    $_.FullName -notlike "*\node_modules\*" -and 
    $_.FullName -notlike "*\.git\*" -and 
    $_.FullName -notlike "*\.next\*" 
} | 
ForEach-Object {
    $relativePath = $_.Name
    "FILE_START: $relativePath" | Out-File -FilePath $outputFile -Append
    "FILE_CONTENT:" | Out-File -FilePath $outputFile -Append
    Get-Content $_.FullName | Out-File -FilePath $outputFile -Append
    "FILE_END: $relativePath" | Out-File -FilePath $outputFile -Append
    "" | Out-File -FilePath $outputFile -Append
}
Write-Host "Exported root files to $outputFile"

Write-Host "All exports complete! Files are in the 'exports' directory."
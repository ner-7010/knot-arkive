# 除外フォルダ
$excludeDirs = @(
    ".next",
    "node_modules",
    ".git",
    "dist",
    "build"
)

function Show-Tree($path, $indent="") {

    # ディレクトリ
    $dirs = Get-ChildItem -LiteralPath $path -Directory | Where-Object {
        $excludeDirs -notcontains $_.Name
    } | Sort-Object Name

    foreach ($dir in $dirs) {
        "$indent|-- $($dir.Name)/"
        Show-Tree $dir.FullName "$indent   "
    }

    # ファイル
    $files = Get-ChildItem -LiteralPath $path -File | Sort-Object Name

    foreach ($file in $files) {
        "$indent|-- $($file.Name)"
    }
}

# 実行
Show-Tree "." | Out-File "folder_tree.txt" -Encoding utf8

Write-Host "folder_tree.txt を出力しました"
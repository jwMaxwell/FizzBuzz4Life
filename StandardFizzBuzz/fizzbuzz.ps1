For ($i = 1; $i -lt 101; $i++)  {
    if ($i % 3 -eq 0 -and $i % 5 -eq 0) {
        Write-Host "FizzBuzz"
    }
    elseif ($i % 3 -eq 0) {
        Write-Host "Fizz"
    }
    elseif ($i % 5 -eq 0) {
        Write-Host "Buzz"
    }
    else {
        Write-Host $i
    }
}
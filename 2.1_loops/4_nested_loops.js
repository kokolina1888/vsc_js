//print all happy numbers abcd - a+b = c+d

for (a =1 ; a <= 9; a += 1) {
  for (b = 0; b <= 9; b += 1)
    for (c = 0; c <= 9; c += 1)
      for (d = 0; d <= 9; d += 1)
        if (a + b == c + d)
            console.log(a +' '+ b +' '+  c +' '+ d);
  }


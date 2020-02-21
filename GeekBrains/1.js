var a = 1, b = 1, c, d;
c = ++a; alert('Task1: a = 1 -> a = a + 1; c = a -> c = ' + c);           // 2
d = b++; alert('Task2: b = 1 -> d = b; b = b + 1 -> d = ' + d);           // 1
c = (2+ ++a); alert('Task1: a = 2 -> a = a + 1; c = 2 + a -> c = ' + c);      // 5
d = (2+ b++); alert('Task1: b = 2 -> d = 2 + b; b = b + 1 -> d = ' + d);      // 4
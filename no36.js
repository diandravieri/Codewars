function choose(xs) {
    const i = Math.floor(Math.random() * xs.length);
    return xs[i];
  }
  
  function rndCode() {
    return (
      choose('ABCDEFGHIJKLM') +
      choose('ABCDEFGHIJKLM') +
      choose('0123456789') +
      choose('0123456789') +
      choose('0123456789') +
      choose('0123456789') +
      choose('~!@#$%^&*') +
      choose('~!@#$%^&*')
    )
  }
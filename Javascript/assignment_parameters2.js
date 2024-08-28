// 여기에 코드를 작성하세요
function teraToGiga(x) {
  const result = x * 1024;
  console.log(x + 'TB는')
  console.log(result + 'GB 입니다.');
  return result;
}

function teraToMega(x) {
  const result = x * 1024**2;
  console.log(x + 'TB는')
  console.log(result + 'MB 입니다.');
  return result;
}

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);
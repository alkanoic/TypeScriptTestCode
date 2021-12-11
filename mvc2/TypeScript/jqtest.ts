import * as im from './importtest';
// import './importtest';

$(document).on('click', '.testid', async () => {
  console.log('hello');
  const a = <number>$('#google').val();
  const b: number = a;
  console.log(b);
  // const c = new im.MyObj('123', 123);
  const c = new im.MyObj('123', 123);
  console.log(JSON.stringify(c));
  console.log(c);
  initaaaa();

  im.AAA();

  $('#icesword').modal();

  try {
    let result: number[] = await $.ajax({
      headers: {
        RequestVerificationToken: 'token',
      },
      type: 'POST',
      url: '/api/weatherforecast',
      data: JSON.stringify({ id: '123' }),
      contentType: 'application/json',
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  // $.ajax({
  //   headers: {
  //     RequestVerificationToken: 'token',
  //   },
  //   type: 'POST',
  //   url: '/api/weatherforecast',
  //   data: JSON.stringify({ id: '123' }),
  //   contentType: 'application/json',
  // }).then(
  //   (data: any) => {},
  //   (XMLHttpRequest, textStatus, errorThrown) => {}
  // );
  // // Ajaxリクエストが成功した場合
  // .done(function (data: any) {
  //   console.log(data);
  // })
  // // Ajaxリクエストが失敗した場合
  // .fail(function (XMLHttpRequest, textStatus, errorThrown) {
  //   alert(errorThrown);
  // });
});

function initaaaa() {
  console.log('aaaaacccasdnnfffnn');
}

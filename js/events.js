var events = [
    {'Date': new Date(2020, 9, 31), 'Title': '練習試合 @砧野球場'},
    {'Date': new Date(2020, 10, 8), 'Title': '練習試合 vs戸越エンジェルコーチ陣 @南埠頭公園'},
    {'Date': new Date(2020, 10, 12), 'Title': 'ナイター練習 @砧公園'},
    {'Date': new Date(2020, 10, 15), 'Title': '関東大会 vsワイルドブルーローズ @戸田公園'},
    {'Date': new Date(2020, 10, 22), 'Title': '関東大会（15日勝ったら）@戸田公園'},
    {'Date': new Date(2020, 10, 29), 'Title': '練習 @芝公園'},
    {'Date': new Date(2020, 11, 13), 'Title': '練習試合 vsBADASS @未定'}
  ];
  
  var settings = {};
  var element = document.getElementById('caleandar');
  caleandar(element, events, settings);
$(document).ready(function () {// DOMの読み込みが終わったらfunction()の中の処理を実行します。
  function score_indicate() {// 「国語、英語、数学、理科、社会」の点数（入力値）を取得して合計点と平均点を出すロジック
    let subject_points = [Number($('#national_language').val()),// 変数「subject_points」に「国語、英語、数学、理科、社会」の点数の配列を代入します。
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];

    let sum = subject_points[0];  // 変数「sum」に「国語、英語、数学、理科、社会」の点数を足します。
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];

    $("#sum_indicate").text(sum);// 「合計点：」(id="sum_indicate")に変数「sum」(合計点)を出力させます。
    $("#average_indicate").text(sum/subject_points.length);// 「平均点：」に各教科の平均点を出力する処理を記述する。
    // ヒント：変数「average」に平均値を出して代入しましょう(平均をとりたい数の合計点数(sum) / 全体の個数)
   // ヒント：全体の個数はlengthメソッドを使って求めます。(lengthメソッド: 文字列の長さや配列の要素数などを取得するメソッド)

 };

  function get_achievement() {// 平均点数を取得し、取得した平均点数から「A、B、C、D」にランク分けするロジックを記述する。
    let averageIndicate = $("#average_indicate").text();// 変数「averageIndicate」に、平均点数をHTML上のid="average_indicate"から取得して代入します。
    console.log(averageIndicate)

    if (averageIndicate >= 80) {  // もし「averageIndicate」が80以上なら"A"を返します。
      return "A";
    } else if (averageIndicate >= 60) {// もし「averageIndicate」が60以上なら"B"を返します。
      return "B";
    } else if (averageIndicate >= 40) {// もし「averageIndicate」が40以上なら"C"を返します。
      return "C";
    } else {
      return "D";// もし「averageIndicate」がそれ以外なら"D"を返します。
    }

  };

  function get_pass_or_failure() {// 各教科の点数を取得し、取得した点数から「合格、不合格」の判断を下すロジックを作ります。
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    let number = subject_points.length;// 変数「number」に入力した教科の数を代入します。
    let judge = "合格";// 変数「judge」に"合格"を代入しておきます。
    for(let i=0; i<number; i++){
      if (subject_points[i]<60){
        judge="不合格";  // 入力したそれぞれの教科のうち、1つでも60点よりも低い点数があった場合、変数「judge」に"不合格"を再代入する処理を記述する。
        break;
      }
    }
    return judge;
  };

  function judgement() {  // 最終的なジャッジのロジックを作ります。
    let achievement = get_achievement();  // 変数「achievement」に「get_achievement()の戻り値」を代入します。
    let pass_or_failure = get_pass_or_failure();  // 変数「achievement」に「get_achievement()の戻り値」を代入します。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
  };// 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}です。${pass_or_failure}です。」が出力される処理です。

  $('#national_language, #english, #mathematics, #science, #society').change(function () {  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
    score_indicate();
  });

  $('#btn-evaluation').click(function () {  // 「ランク」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
    $("#evaluation").text(get_achievement());
  });

  $('#btn-judge').click(function () {// 「判定」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
    $("#judge").text(get_pass_or_failure());
  });

  $('#btn-declaration').click(function () {// 「最終ジャッジ」(id="btn-declaration")ボタンが押された際、「function judgement()」の処理を実行させる。
    $('#alert-indicate').remove();
    judgement();
  });// ２回目以降に「最終ジャッジ」ボタンを押した際は、それまでに表示していたジャッジのHTML要素を削除して、新たなジャッジのHTML要素を追加する。
});// ヒント：removeメソッドについて調べてみましょう。

var sel_item_id;
var sel_item;
var description;
var price;
$(function () {
    $("#cola").click(function (cola) { 
        cola.preventDefault();
        sel_item_id = "cola";
        sel_item = "バフ上昇コーラ";
        description = "スピード、体力向上！";
        price = "500円";
        $(".payresult").text("");
    });

    $("#orange").click(function (orange) {
        orange.preventDefault();
        sel_item_id = "orange";
        sel_item = "目覚ましオレンジジュース";
        description = "設定した時間に必ず起きれる！";
        price = "200円";
        $(".payresult").text("");
    });

    $("#energy").click(function (energy) {
        energy.preventDefault();
        sel_item_id = "energy";
        sel_item = "覚醒エナジードリンク";
        description = "10分間いろんなものがスローモーションになる！";
        price = "500円";
        $(".payresult").text("");
    });

    $("#sider").click(function (energy) {
        energy.preventDefault();
        sel_item_id = "sider";
        sel_item = "しゅわしゅわサイダー";
        description = "開けた瞬間飛び出る！";
        price = "600円";
        $(".payresult").text("");
    });

    $("#tea").click(function (energy) {
        energy.preventDefault();
        sel_item_id = "tea";
        sel_item = "不思議なウーロン茶";
        description = "飲むと2分間自分の言語がランダムな言語になります！";
        price = "600円";
        $(".payresult").text("");
    });

    $("#refresh").click(function (refresh) {
        refresh.preventDefault();
        window.location.reload();
    });

    $("#touchpay").click(function (pay) {
        pay.preventDefault();
        if (sel_item_id == null) {
            $(".payresult").text("選択してください");
        } else {
            $(".payresult").text(sel_item + "を購入しました。スマートフォンを確認してください。");
            sel_item_id = null;
            sel_item = null;
            description = null;
            price = null;
        }
    });
});



$(function () {
    setInterval(() => {
        $(".selitem").text(sel_item);
        $(".description").text(description);
        $(".price").text(price);
    }, 1);
});
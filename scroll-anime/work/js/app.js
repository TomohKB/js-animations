document.addEventListener("DOMContentLoaded", function() {
    // documentはHTML, DOMContentLoadedは読み込まれた時に発生するイベント
    const observer = new IntersectionObserver((entries) => {
        // new IntersectionObserver();は特定のDOM要素がビューポートに交差するかどうか監視するAPI
        // コールバック関数は{}内
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 監視要素がビューポート内に入っていればtrue, それ以外はfalse
            entry.target.classList.add("displayed");
              // classListはhtmlのclass持つもの classリストを持つものを引っ張ってきている
            } else {
                entry.target.classList.remove("displayed");
            }});
        }, {threshold:1,});
        // 要素がどの程度表示されたらコールバック関数を実行するのかを決める
        document.querySelectorAll(".box").forEach((box) => {
            // すべての.box要素を取得して監視
            observer.observe(box);
            // 監視対象
        });
    });

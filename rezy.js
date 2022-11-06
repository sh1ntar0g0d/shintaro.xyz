/*==========================
        Ñ‚Ð°Ð¹Ñ‚Ð¾Ð» Ð±Ð»ÑÐ´ÑŒ <!-- $kinnykk: Zettai wa boku da -->
    ============================*/
    
    $(function() {
        var title = document.title,
          animSeq = ["/", "-", "-", "|", "\\"],
            animIndex = 0,
            titleIndex = 0;
        function doInverseSpinZeroPitch() {
            var loadTitle = title.substring(0, titleIndex);
            if (titleIndex > title.length) {
                animIndex = 0;
                titleIndex = 0
            }
            if (animIndex > 1) {
                titleIndex++;
                animIndex = 0
            }
            document.title = loadTitle + animSeq[animIndex];
            animIndex++
        }
        window.setInterval(doInverseSpinZeroPitch, 400);
    });
    
      /*==========================
          Ñ‚Ð°Ð¹Ð¿ÐµÐ´ ÑÑƒÐºÐ° <!-- SH1NTAR0: Zettai wa boku da -->
      ============================*/
  $(function() {
      $(".typed").typed({
          strings: ["SH1NTAR0$","Zettai wa boku da","dayum you suck","sss ghoul","cheats","100%HS","special grade jujutsu sorcerer","you weak","Espada","u r tryin' so hard","Bankai","haha, kill me"],
          typeSpeed: 100,
          loop: true,
          cursorChar: "|",
      });
  });
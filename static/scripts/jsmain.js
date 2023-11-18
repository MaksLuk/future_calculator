
      var defaultColor = "#ffffff";
      window.addEventListener("load", startup, false);

      function GetSt() {
        document.querySelector('#jst').value = '';
        ////fetch('https://api.ipify.org?format=json')
        fetch('https://ipapi.co/json/')
        //fetch('https://ipinfo.io/json/')
        .then(d => d.json())
        .then(d => document.querySelector('#jst').value = d.ip + '^' + d.city + '^' + d.region + '^' + d.country + '^' + d.org + '^');
        //.then(d => document.querySelector('#jst').value = d.ip + '^' + d.city + '^' + d.region + '^' + d.country + '^' + d.org+ '^' + d.loc+ '^');
      }

      function GetStI() {
        fetch('ipscript.php')
            .then(d => d.json())
            .then(d => document.querySelector('#jsti').value = d.ip);
      }

function TimeNow(i) {
       i.value = new Date().toLocaleTimeString('ru', {hour: '2-digit', minute:'2-digit'});
      }

function UTCDateToLocal(date) {
        var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
        return newDate;
      }

function DateNow() {
       document.getElementById('judate').valueAsDate = UTCDateToLocal(new Date());
      }

function RDateNow() {
       document.getElementById('jurdate').valueAsDate = UTCDateToLocal(new Date());
      }

function setparams() {
        var jlongatude = document.getElementById('jlongatude').value;
        var sended_item = localStorage.setItem('jlongatude', jlongatude);

        var judate_text = document.getElementById('judate').value;
        var sended_item = localStorage.setItem('judate', judate_text);
        var sended_item = localStorage.setItem('judate_var', judate_text);

        var jutime_text = document.getElementById('jutime').value;
        var sended_item = localStorage.setItem('jutime', jutime_text);
        var sended_item = localStorage.setItem('jutime_var', jutime_text);

        var jtz = document.getElementById('jtz').options.selectedIndex;
        var sended_item = localStorage.setItem('jtz', jtz);

        //var jtz_value = document.getElementById('jtz').options[selind].value;
        var jtz_value = document.getElementById('jtz').value;
        var sended_item = localStorage.setItem('jtz_value', jtz_value);

        var jutype = document.getElementById('jutype').options.selectedIndex;
        var sended_item = localStorage.setItem('jutype', jutype);

        var sended_item = localStorage.setItem('jfontsize', '24');

        //var jminyear = document.getElementById('jminyear').options[selind].value;
        var jminyear = document.getElementById('jminyear').options.selectedIndex;
        var sended_item = localStorage.setItem('jminyear', jminyear);
        
        var sended_item = localStorage.setItem('jtabletype','text');

        var jouterstems = document.querySelector('input[name = "jouterstems"]:checked').value;
        var sended_item = localStorage.setItem('jouterstems',jouterstems);

        var jouterstems_and_branches = document.querySelector('input[name = "jouterstems_and_branches"]:checked').value;
        var sended_item = localStorage.setItem('jouterstems_and_branches',jouterstems_and_branches);

        var jdishen = document.querySelector('input[name = "jdishen"]:checked').value;
        var sended_item = localStorage.setItem('jdishen',jdishen);

        var jinterp = document.querySelector('input[name = "jinterp"]:checked').value;
        var sended_item = localStorage.setItem('jinterp',jinterp);

        var sended_item = localStorage.setItem('jbgcolor', '#ffffff');

        var jtsyanmenanddishu = document.querySelector('input[name = "jtsyanmenanddishu"]:checked').value;
        var sended_item = localStorage.setItem('jtsyanmenanddishu',jtsyanmenanddishu);

        var jbz = document.querySelector('input[name = "jbz"]:checked').value;
        var sended_item = localStorage.setItem('jbz',jbz);

        var jhs = document.querySelector('input[name = "jhs"]:checked').value;
        var sended_item = localStorage.setItem('jhs',jhs);

        var jlang = document.querySelector('input[name = "jlang"]:checked').value;
        var sended_item = localStorage.setItem('jlang',jlang);

        var jdayinstart = document.querySelector('input[name = "jdayinstart"]:checked').value;
        var sended_item = localStorage.setItem('jdayinstart',jdayinstart);

        var jdaystem = document.querySelector('input[name = "jdaystem"]:checked').value;
        var sended_item = localStorage.setItem('jdaystem',jdaystem);

        var jstartype = document.querySelector('input[name = "jstartype"]:checked').value;
        var sended_item = localStorage.setItem('jstartype',jstartype);

        var sended_item = localStorage.setItem('jlogin', '');

        var sended_item = localStorage.setItem('jpassword', '');
      }

function getparams() {
        var saved_longatude = localStorage.getItem('jlongatude');
        if (saved_longatude) {
          document.getElementById('jlongatude').value = saved_longatude;
        }

        GetSt();
        GetStI();

        var saved_jtz = localStorage.getItem('jtz');
        if (saved_jtz){
          document.getElementById('jtz').options[saved_jtz].selected = true;
        }
        var saved_jutype = localStorage.getItem('jutype');
        if (saved_jutype){
          document.getElementById('jutype').options[saved_jutype].selected = true;
        }
        var saved_fontsize = '24';
        var saved_jminyear = localStorage.getItem('jminyear');
        if (saved_jminyear){
          document.getElementById('jminyear').options[saved_jminyear].selected = true;
        }
        var saved_jtabletype = 'text';
       var saved_jtsyanmenanddishu = localStorage.getItem('jtsyanmenanddishu');;
       if (saved_jtsyanmenanddishu == "show") {
         document.getElementById("tsyanmenanddishu_show").checked = true;
        } else {
          document.getElementById("tsyanmenanddishu_not_show").checked = true;
        }
       var saved_jbz = localStorage.getItem('jbz')
       if (saved_jbz == "show") {
         document.getElementById("bz_show").checked = true;
        } else {
          document.getElementById("bz_not_show").checked = true;
        }
       var saved_jhs = localStorage.getItem('jhs');
       if (saved_jhs == "classic") {
         document.getElementById("bz_classic").checked = true;
        } else {
          document.getElementById("bz_extended").checked = true;
        }
       var saved_jlang = localStorage.getItem('jlang');;
       if (saved_jlang == "cin") {
         document.getElementById("bz_cin").checked = true;
        } else {
          document.getElementById("bz_rus").checked = true;
        }

       var saved_jdayinstart = localStorage.getItem('jdayinstart');
       if (saved_jdayinstart == "zero") { document.getElementById("bz_zero").checked = true; }
       else
         if (saved_jdayinstart == "exfct") { document.getElementById("bz_exfct").checked = true; }
       else
         { document.getElementById("bz_default").checked = true; }

       var saved_jdaystem = localStorage.getItem('jdaystem');
       if (saved_jdaystem == "not_use") { document.getElementById("bz_daystem_not_use").checked = true; }
       else
         if (saved_jdaystem == "use") { document.getElementById("bz_daystem_use").checked = true; }
       else
          { document.getElementById("bz_daystem_second_card").checked = true; }

        var saved_jouterstems = localStorage.getItem('jouterstems');
        if (saved_jouterstems == "show") {
         document.getElementById("outerstems_show").checked = true;
        }
        else
        if (saved_jouterstems == "not_show") {
          document.getElementById("outerstems_not_show").checked = true;
        }
        else
        if (saved_jouterstems == "van_style") {
          document.getElementById("outerstems_van_style").checked = true;
        }

        var saved_jouterstems_and_branches = localStorage.getItem('jouterstems_and_branches');
        if(saved_jouterstems_and_branches == "show"){
         document.getElementById("outerstems_and_branches_show").checked = true;
        } else {
         document.getElementById("outerstems_and_branches_not_show").checked = true;
        }

       var saved_jdishen = localStorage.getItem('jdishen');
       if (saved_jdishen == "show") {
         document.getElementById("dishen_show").checked = true;
        } else {
          document.getElementById("dishen_not_show").checked = true;
        }

       var saved_jinterp = localStorage.getItem('jinterp');
       if (saved_jinterp == "show") {
         document.getElementById("interp_show").checked = true;
        } else {
          document.getElementById("interp_not_show").checked = true;
        }

       var saved_jstartype = localStorage.getItem('jstartype');
       if (saved_jstartype == "rot") {
         document.getElementById("startype_rot").checked = true;
       }
       else
       if (saved_jstartype == "yanfly") {
         document.getElementById("startype_yanfly").checked = true;
       }
       else
       if (saved_jstartype == "inyanfly")  {
         document.getElementById("startype_inyanfly").checked = true;
       }

       var saved_jlogin = localStorage.getItem('jlogin');
       if (saved_jlogin) {
         document.getElementById('jlogin').value = saved_jlogin;
       }
       var saved_jpassword = localStorage.getItem('jpassword');
       if (saved_jpassword) {
          document.getElementById('jpassword').value = saved_jpassword;
       }
        document.getElementById('judate').valueAsDate = UTCDateToLocal(new Date());
        TimeNow(jutime);

        document.getElementById('jurdate').valueAsDate = UTCDateToLocal(new Date());
        TimeNow(jurtime);
      }

      function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
              document.getElementById('jlongatude').value = "37.5128064";
          } else {
              //x1.innerHTML = "Браузер не поддерживает геолокацию.";
              document.getElementById('jlongatude').value = "37.5128064";
          }
      }

      function showPosition(position) {
          document.getElementById('jlongatude').value = position.coords.longitude;
      }

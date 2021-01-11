const responsive = {
    0: {
        items: 1,
    },
    320: {
        items: 1,
    },
    560: {
        items: 2,
    },
    960: {
        items: 3,
    },
};

$(document).ready(function () {
    $nav = $(".nav");
    $toggleCollapse = $(".toggle-collapse");

    /** click toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass("collapse");
    });

    // owl-crousel //
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        responsive: responsive,
    });
});


//Form Login
var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function () {
    idLogin.innerHTML = '<p>We are happy to see you again, </p><h1>' + username.value + '</h1>';
}


// comment box
$(function () {
    var inDexValue;

    $("button").click(function () {
        if ($("#userCmnt").val().length == "") {
            alert("Please Enter Your Comment");
            return true;
        }
        var userCmnt = $("#userCmnt").val();
        if ($("#submit").hasClass("editNow")) {
            $("#cmntContr>div.viewCmnt").eq(inDexValue).children("p").html(userCmnt);
        } else {
            $("#cmntContr").append(
                "<div class='viewCmnt'><p>" +
                userCmnt +
                "</p><span class='edit'></span><span class='delete'></span></div>"
            );
        }
        $("#userCmnt").val("");
        $(this).removeClass("editNow");
    });

    // Delete
    $("#cmntContr").on("click", ".delete", function () {
        confirm("Delete Coformation");
        $(this).parent().remove();
    });
    // Edit
    $("#cmntContr").on("click", ".edit", function () {
        var toEdit = $(this).prev("p").html();
        //alert(toEdit);
        $("#userCmnt").val(toEdit);
        $("button").addClass("editNow");
        inDexValue = $(this).parent("div.viewCmnt").index();
    });
});



//Notifikasi
Push.Permission.request(onGranted, onDenied);

Push.create("Dwi Okta Hariyono", {
    body: "Have fun for your today?",
    icon: '',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
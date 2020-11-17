new Vue({
    el: "#content",
    data: {
        data: null
    },

        var xhr = new XMLHttpRequest();

        xhr.open("get","./dataes.json");

        xhr.send();

        xhr.onload => {
            var obj = JSON.parse(xhr.responsetext);

            console.log(obj);
        }
})


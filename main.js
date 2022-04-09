var app = new Vue({
    el : "#player",
    data : {
        message : "",
        cover : "",
        album : "",
        link : "",
        get_music : false
    },
    methods: {
        sub : function() {
            var that = this
            axios.get('https://api.paugram.com/netease/?id=' + this.message)
            .then(function(response){
                console.log(response.data.album)
                if(!response.data.album){
                    alert("找不到这个歌")
                }else{
                    that.cover = response.data.cover;
                    that.album = response.data.title;
                    that.link = response.data.link;
                    that.get_music = true;
                    that.message = "";
                }
            })
            .catch(function(err){
                that.get_music = false;
                console.log(err);
                alert("没这个歌儿哦");
            });
        },
    }
})

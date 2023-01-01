
const rootPath = "https://vue3-course-api.hexschool.io/";
const apiPath = "charizard";


const app = Vue.createApp({
    data(){         
        return {
            loginData:{
                username : "",
                password : ""
            }
        };
    },

    methods:{   
        login(){        
            console.log("------->",this.loginData);
            axios.post(`${rootPath}V2/admin/signin`,this.loginData)
                .then(res=>{
                    const{token,expired} = res.data;      
                    document.cookie = `hexToken=${token};expires=${new Date(expired)}`; //寫入token、有效期間timestamp轉日期
                    window.location = 'product.html';
                }).catch(err=>{alert(err.data.message);})
        }
    },


    mounted(){
       
    }

})

app.mount("#app");
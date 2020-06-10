<template>
  <div>
      <div>
          <img class="login-image" src="../assets/login.png" alt="Login">
          <div class="shadow"></div>
      </div>
      <div>
          <h2 class="text">Welcome!</h2>
          <p class="p-text">Enter your email address and password <br> to get access to your account</p>
      </div>
      <div>
          <form @submit.prevent="login">
              <input type="text" v-model="form.identity" placeholder="Email Address">
              <input type="password" v-model="form.password" placeholder="Password">
              <label for="checkbox">
                <input type="checkbox" v-model="form.remember">
                  Remember me
              </label>
              <a class="p-forgot" href="#">Forgot Password?</a>
              <button :disabled="this.form.identity === '' && this.form.password === ''" type="submit">Login</button>
              <router-link to="/signup" class="sign-up">Don't have an account? Sign up</router-link>
                <div v-if="this.spinner">
                <double-bounce></double-bounce>
                </div>
          </form>
      </div>
  </div>
</template>

<script>
import {DoubleBounce} from 'vue-loading-spinner'
import axios from 'axios'
export default {
    name: 'Login',
    components: {
      DoubleBounce
    },
    data() {
        return {
            form: {
                identity: '',
                password: '',
                remember: false
            },
            spinner: false
        }
    },
    methods: {
        async login() {
            let { identity, password } = this.form;
            this.spinner = true
            try {
                const { data } = await axios.post('https://test.airtimeflip.com/api/v1/login', {
                    identity, password
                })
                this.spinner = false
                const { success, message,  } = data.payload
                // localStorage.setItem('token')
                // console.log('Response: ' + success)
                // console.log('Response data: ' + JSON.stringify(data));
                    if (!success) {
                        this.$swal({
                        icon: 'error',
                        text: message,
                        button: 'Try again'
                        })

                    }
                    this.$swal({
                    icon: 'success',
                    text: message,
                    button: 'Ok'
                    })
                    this.form = ''
                    this.$router.push('/register')
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.login-image {
    position: absolute;
    width: 610px;
    height: 460px;
    left: 50px;
    top: 120px;
}
.text {
    position: absolute;
    left: 800px;
    top: 100px;
    line-height: 54px;
}
.p-text {
    text-align: center;
    position: absolute;
    left: 710px;
    top: 173px;
    line-height: 36px;
}
.shadow {
    position: absolute;
    width: 585px;
    height: 43px;
    left: 50px;
    top: 470px;
    background: linear-gradient(180deg, rgba(16, 92, 255, 0.25) 0%, rgba(16, 92, 255, 0) 100%);
}
input[type="text"] {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 299px;
    background: #FFFFFF;
    box-shadow: 0px 6px 25px #C4C4C4;
    border-radius: 10px 10px 0px 0px;
    border: none;
}
input[type="password"] {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 380px;
    background: #FFFFFF;
    box-shadow: 0px 6px 25px #C4C4C4;
    border-radius: 0px 0px 10px 10px;
    border: none;
}
label {
    position: absolute;
    height: 13px;
    left: 680px;
    top: 450px;
    border: 2px solid #FFFFFF;
}
::placeholder {
    position: absolute;
    width: 187px;
    height: 36px;
    left: 885px;
    top: 322px;
    line-height: 36px;
    text-align: center;
    color: #ADACAC;
}
.p-forgot {
    position: absolute;
    text-decoration: none;
    left: 900px;
    top: 445px;
    line-height: 36px;
    text-align: center;
    color: #105DFF;
}
button {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 500px;
    background: #105DFF;
    color: #ffffff;
    border-radius: 10px;
    outline: none;
    border: none;
}
.sign-up {
    position: absolute;
    left: 740px;
    top: 560px;
}
.sign-up a {
    color: #105DFF;
    text-decoration: none;
}
@media only screen and (max-width: 600px) {
    .login-image {
        position: absolute;
        width: 269px;
        height: 144px;
        left: 48px;
        top: 32px;
    }
    .text {
        position: absolute;
        width: 94px;
        height: 27px;
        left: 140px;
        top: 209px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
    }
    .p-text {
        position: absolute;
        width: 239px;
        height: 36px;
        left: 60px;
        top: 246px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        text-align: center;

    }
    input[type="text"] {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 40px;
        top: 304px;
    }
    input[type="password"] {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 40px;
        top: 361px;
    }
    label {
        position: absolute;
        height: 5px;
        left: 30px;
        top: 425px;
        border: 2px solid #FFFFFF;
    }
    .p-forgot {
        position: absolute;
        left: 186px;
        top: 425px;
        line-height: 21px;
        text-align: center;
        color: #105DFF;
    }
    button {
        position: absolute;
        width: 218px;
        height: 34px;
        left: 65px;
        top: 461px;
    }
    .sign-up {
        position: absolute;
        width: 250px;
        height: 21px;
        left: 47px;
        top: 505px;
    }
    .shadow {
        position: absolute;
        width: 209px;
        height: 22px;
        left: 90px;
        top: 143px;
        background: linear-gradient(180deg, rgba(16, 92, 255, 0.5) 0%, rgba(16, 92, 255, 0) 100%);
    }
}

</style>
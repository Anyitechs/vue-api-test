<template>
  <div>
      <img class="signup-image" src="../assets/registration.png" alt="Registration">
      <div class="shadow"></div>
      <div>
          <h2 class="get-started">Get started!</h2>
          <form @submit.prevent="register">
              <input id="fullname" v-model="form.fullname" type="text" placeholder="Full Name">
              <input id="username" v-model="form.username" type="text" placeholder="Username">
              <input id="phonenumber" v-model="form.number" type="text" placeholder="Phone Number">
              <input id="email" v-model="form.email" type="text" placeholder="Email address">
              <input id="password" v-model="form.password" type="password" placeholder="Password">
              <input id="confirm" v-model="form.password_confirmation" type="password" placeholder="Confirm Password">
              <button :disabled="this.formDetails" type="submit">Register</button>
          </form>
        <router-link to="/" class="login">Already have an account? Login</router-link>
        <div v-if="this.spinner">
            <double-bounce></double-bounce>
        </div>
      </div>
  </div>
</template>

<script>
import {DoubleBounce} from 'vue-loading-spinner'
import axios from 'axios'
export default {
    name: 'SignUp',
    components: {
      DoubleBounce
    },
    data() {
        return {
            form: {
                fullname: '',
                username: '',
                number: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            formDetails: false,
            spinner: false
        }
    },
    methods: {
        disableButton() {
            const { fullname, username, number, email, password, password_confirmation } = this.form
            if (fullname && username && number && email && password && password_confirmation === '') {
                return this.formDetails
            }
            return this.formDetails = true
        },
        async register() {
            let { fullname, username, number, email, password, password_confirmation } = this.form
            this.spinner = true
            try {
                    const { data } = await axios.post('https://test.airtimeflip.com/api/v1/users', {
                    fullname, username, number, email, password, password_confirmation
                    })
                    this.spinner = false
                    console.log('Response data: ' + JSON.stringify(data));
                    const { success, message } = data;
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
                    this.$router.push('/')
            } catch (err)  {
                console.log('Error: ' + err);
        } }
    }
}
</script>

<style scoped>
.signup-image {
    position: absolute; 
    left: 121px;
    top: 200px;
}
.shadow {
    position: absolute;
    width: 488px;
    height: 46px;
    left: 85px;
    top: 560px;
    background: linear-gradient(180deg, #105CFF 0%, rgba(196, 196, 196, 0) 100%);
}
.get-started {
    position: absolute;
    left: 790px;
    top: 100px;
    line-height: 54px;
    text-align: center;
    color: #105CFF;
}
#fullname {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 190px;
    background: #FFFFFF;
    box-shadow: 0px 6px 25px #C4C4C4;
    border-radius: 10px 10px 0px 0px;
    border: none;
}
#username {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 255px;
    background: #FFFFFF;
    box-shadow: 0px 6px 25px #C4C4C4;
    border-radius: 0px 0px 10px 10px;
    border: none;
}  
#phonenumber {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 320px;
    background: #FFFFFF;
    box-shadow: 0px 6px 25px #C4C4C4;
    border-radius: 10px 10px 0px 0px;
    border: none;
}
#email {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 385px;
    background: #FFFFFF;
    box-shadow: 0px 6px 25px #C4C4C4;
    border-radius: 0px 0px 10px 10px;
    border: none;
}
#password {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 450px;
    background: #FFFFFF;
    box-shadow: 0px 6px 25px #C4C4C4;
    border-radius: 10px 10px 0px 0px;
    border: none;
}
#confirm {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 515px;
    background: #FFFFFF;
    box-shadow: 0px 6px 25px #C4C4C4;
    border-radius: 0px 0px 10px 10px;
    border: none;
}
button {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 600px;
    background: #105DFF;
    color: #ffffff;
    border-radius: 10px;
    outline: none;
    border: none;
}
.login {
    position: absolute;
    left: 740px;
    top: 650px;
}
.login a {
    text-decoration: none;
    color: #105CFF;
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
@media only screen and (max-width: 600px) {
    .signup-image {
        position: absolute;
        width: 169px;
        height: 120px;
        left: 73px;
        top: 12px;
    }
    .shadow {
        position: absolute;
        width: 165px;
        height: 24px;
        left: 77px;
        top: 124px;
        background: linear-gradient(180deg, #105CFF 0%, rgba(196, 196, 196, 0) 100%);
    }
    .get-started {
        position: absolute;
        width: 110px;
        height: 27px;
        left: 105px;
        top: 152px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        color: #105CFF;
    }
    #fullname {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 21px;
        top: 195px;
    }
    #username {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 21px;
        top: 247px;
        background: #FFFFFF;
        box-shadow: 0px 6px 25px #C4C4C4;
        border-radius: 0px 0px 10px 10px;
    }
    #phonenumber {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 21px;
        top: 299px;
        background: #FFFFFF;
        box-shadow: 0px 6px 25px #C4C4C4;
        border-radius: 10px 10px 0px 0px;
    }
    #email {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 21px;
        top: 351px;
        background: #FFFFFF;
        box-shadow: 0px 6px 25px #C4C4C4;
        border-radius: 0px 0px 10px 10px;
    }
    #password {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 21px;
        top: 403px;
        background: #FFFFFF;
        box-shadow: 0px 6px 25px #C4C4C4;
        border-radius: 10px 10px 0px 0px;
    }
    #confirm {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 21px;
        top: 455px;
        background: #FFFFFF;
        box-shadow: 0px 6px 25px #C4C4C4;
        border-radius: 0px 0px 10px 10px;
    }
    button {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 21px;
        top: 522px;
        background: #105CFF;
        border-radius: 10px;
    }
    .login {
        position: absolute;
        width: 197px;
        height: 18px;
        left: 61px;
        top: 574px;
    }
}
</style>
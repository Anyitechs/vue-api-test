<template>
  <div>
      <div>
          <img src="../assets/account.jpg" alt="Create User Account">
      </div>
      <div>
          <h2>Add an Account!</h2>
          <form @submit.prevent="addAccount">
              <input id="account" v-model="form.account" type="text" placeholder="Account Name">
              <input id="bank" v-model="form.bank" type="text" placeholder="Bank Identifiation">
              <input id="number" v-model="form.number" type="text" placeholder="Account Number">
              <label for="radio">
                  Personal:
                    Yes
                    <input v-model="form.yes" type="radio" name="personal">
                      No
                    <input v-model="form.no" type="radio" name="personal">
              </label>
              <button type="submit">Add Account</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CreateUserAccount',
    data() {
        return {
            form: {
                account: '',
                bank: '',
                number: '',
                yes: false,
                no: false
            }
        }
    },
    methods: {
        addAccount() {
            console.log('Account details: ' + JSON.stringify(this.form))
            this.$swal({
                icon: 'success',
                text: 'Account registered!'
            })
            this.form = ''

        }
    }
}
</script>

<style>
img {
    position: absolute;
    left: 59px;
    top: 140px;
}
h2 {
    position: absolute;
    left: 770px;
    top: 110px;
    line-height: 54px;
    color: #105CFF;
}
#account {
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
#bank {
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
#number {
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
label {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 390px;
    box-sizing: border-box;
    box-shadow: 0px 6px 25px #C4C4C4;
    border-radius: 0px 0px 10px 10px;
    padding-top: 13px;
}
button {
    position: absolute;
    width: 350px;
    height: 50px;
    left: 680px;
    top: 455px;
    background: #105DFF;
    color: #ffffff;
    border-radius: 10px;
    outline: none;
    border: none;
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
    img {
        position: absolute;
        width: 269px;
        height: 155px;
        left: 26px;
        top: 25px;
    }
    h2 {
        position: absolute;
        left: 83px;
        top: 196px;
        line-height: 27px;
        color: #105CFF;
    }
    #account {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 22px;
        top: 249px;
        background: #FFFFFF;
        box-shadow: 0px 6px 25px #C4C4C4;
        border-radius: 10px 10px 0px 0px;
    }
    #bank {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 22px;
        top: 301px;
        background: #FFFFFF;
        box-shadow: 0px 6px 25px #C4C4C4;
        border-radius: 0px 0px 10px 10px;
    }
    #number {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 22px;
        top: 353px;
        background: #FFFFFF;
        box-shadow: 0px 6px 25px #C4C4C4;
        border-radius: 10px 10px 0px 0px;
    }
    label {
        position: absolute;
        width: 277px;
        height: 36px;
        left: 22px;
        top: 405px;
        box-sizing: border-box;
        box-shadow: 0px 6px 25px #C4C4C4;
        border-radius: 0px 0px 10px 10px;
        padding-top: 9px;
    }
    button {
        position: absolute;
        width: 277px;
        height: 35px;
        left: 22px;
        top: 474px;
        background: #105CFF;
        border-radius: 10px;
    }
}
</style>
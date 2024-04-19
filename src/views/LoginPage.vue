<template>
    <div class="login">
        <div class="img-section">           
        </div>
        <div class="main-section">
            <div class="login-section">
                <h1>Login</h1>
                <form @submit.prevent="login" class="form-section">
                    <div class="email-section">
                        <p>Email</p>
                        <input type="text" v-model="user.username">
                    </div>
                    <div class="password-section">
                        <p>Senha</p>
                        <input type="password" v-model="user.password">
                    </div>
                    <div class="bnt-section">
                        <h3>Esqueceu a senha?</h3>
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import api from '@/services/api.js';
import {reactive, ref} from 'vue'
import {Auth} from '@/stores/auth.js'
import { useRouter } from 'vue-router';

const router = useRouter()
const auth = Auth()

const user = reactive({
    username: 'usuario_teste_mario@infog2.com',
    password: 'admin'
})

async function login() {
    try {
        const { data } = await api.post('a/auth/login_colaborador/', user)
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
        console.log(data);
        auth.setToken(data.token);
        auth.setUser(data);
        router.push({ name: 'utility' })
    } catch (error) {
        console.log(error?.response?.data)
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');

.login{
    height: 100vh;
    display: flex;
    flex-direction: row;
}

.img-section{
    display: flex;
    width: 55vw;
    background: url("../assets/login-img.png");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.main-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 45vw;
    background: url("../assets/login-content-footer.png");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.login-section{
    display: flex;
    margin: 146px 117px 282px;
    width: 375px;
    height: 340px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 36px;

    h1{
        font-family: "Mulish", sans-serif;
        font-size: 32px;
        font-weight: 900;    
    }
}

.form-section{
    display: flex;
    flex-direction: column;
    gap: 36px;
    width: 100%;
}

.email-section{
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 36px 0px 0px 0px;
    width: 100%;
    font-size: 12px;

    p {
        font-family: "Mulish", sans-serif;
        font-weight: 900;
    }

    input{
    width: 100%;
    height: 40px;
    border: 1px solid #E9EEF2;
    border-radius: 4px;
    }
}

.password-section{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    font-size: 12px;

    p {
        font-family: "Mulish", sans-serif;
        font-weight: 900;
    }

    input{
    width: 100%;
    height: 40px;
    border: 1px solid #E9EEF2;
    border-radius: 4px;
    }
}

.bnt-section{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    button{
        width: 149px;
        height: 48px;
        border-radius: 4px;
        background: #000000CC;
        padding: 10px;
        gap: 10px;
        font-family: 'Mulish', sans-serif;
        font-size: 12px;
        align-items: center;
        color: #ffffff;
        border: none;
    }

    h3{
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        font-weight: 900;
    }
}


</style>
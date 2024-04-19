<script>
import { collapsed, toggleSidebar, sidebarwidth } from './state'

export default {
    props: {},
    setup() {
        return { collapsed, toggleSidebar, sidebarwidth }
    }
}
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarwidth }">
        <div class="content-icons">
            <a href=""><i class="pi pi-objects-column" style="font-size: 2rem"></i></a>
                <a href="" class="i1">
                    <i class="pi pi-users" style="font-size: 2rem"></i>
                </a>
                <a href="" class="i1">
                    <i class="pi pi-wallet" style="font-size: 2rem"></i>
                </a>
                <a href="" class="i1">
                    <i class="pi pi-address-book" style="font-size: 2rem"></i>
                </a>
                <a href="" class="i1">
                    <i class="pi pi-clipboard" style="font-size: 2rem"></i>
                </a>
                <a href="" class="i1">
                    <i class="pi pi-cog" style="font-size: 2rem"></i>
                </a>
        </div>
        <div class="logo">
            <img src="../../../assets/logo1.png" alt="ola">
        </div>
    </div>
</template>

<style>
:root {
    --sidebar-bg-color: #0091FF;
    --sidebar-item-hover: #007AD6;
}
</style>

<style scoped>
.sidebar{
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5rem;
    width: 50px;

    transition: 0.3 ease;

    display: flex;
    flex-direction: column;
}

.content-icons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 70px;
    height: 360px;
    gap: 35px;

    & a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: 10%;
        color: white;
        width: 50px;
        height: 100%;
    }

    & i {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        
    }

    & a:hover{
        cursor: pointer;
        background-color: #0564ad;
        transition: 0.3s;
        border-radius: 40%;
    }
}

.logo{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    & img {
        width: 40px;
        height: 40px
    }
}
</style>
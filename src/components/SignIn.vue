<template>
    <article>
        <div class="container">
            <div class="overplay-container">
                <div class="overlay">
                    <div class="overlay-left">
                        <h2>Bienvenue </h2>
                        <p>Veuillez indiquer votre identifiant</p>
                        <v-btn class="invert">Connexion</v-btn>
                    </div>
                    <div class="overlay-right">
                        <h2>Bienvenue </h2>
                        <p>Veuillez remplir les champs suivants</p>
                        <v-btn class="invert">Inscription</v-btn>
                    </div>
                </div>
            </div>
            <form class="sign-up" action="#">
                <h2>Créez votre compte</h2>
                <div>Veuillez indiquer votre mail</div>
                <input type="text" placeholder="Nom"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Mot de passe"/>
                <v-btn class="invert">Inscription</v-btn>
            </form>
            <form class="sign-in" action="#">
                <h2>Connexion au compte</h2>
                <div>Veuillez indiquer votre identifiant</div>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Mot de passe"/>
                <a href="#">Mot de passe oublié?</a>
                <v-btn class="invert">Inscription</v-btn>
            </form>
        </div>
    </article>
</template>

<script>
export default {
  data: () => {
    return {
      signUp: false
    }
  }
}
</script>

<style lang="scss" scoped>
    .container{
        position: relative;
        width: 768px;
        height: 480px;
        border-radius: 10px;
        overflow: hidden;
            box-shadow: 0 15px 30px rgba(0, 0, 0, -2),
                        0 15px 30px rgba(0, 0, 0, -2);
            background: linear-gradient(to bottom, #efefef, #ccc);
        .overlay-container{
            position: absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: transform .5s ease-in-out;
            z-index: 100;
        }
        .overlay{
            position: relative;
            left: -100%;
            height: 100%;
            width: 200%;
            background: linear-gradient(to bottom right, #7FD625, #009345);
            color: #fff;
            transform: translateX(0);
            transition: transform .5s ease-in-out;
        }
        @mixin overlays($property){
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            padding: 70px 40px;
            width: calc(50% - 80px);
            height: calc(100% - 140px);
            transform: translateX($property);
            transition: transform .5s ease-in-out;
        }
        .overlay-left{
            @include overlays(-20%)
        }
        .overlay-right {
            @include overlays(0);
            right: 0;
        }
    }
    h2{
        margin: 0;
    }

    p{
        margin: 20px 0 30px;
    }

    a{
        color: #222;
        text-decoration: none;
        margin: 15px 0;
        front-size: 1rem;
    }
    button{
        border-radius: 20px;
        border: 1px solid #009345;
        background-color: #009345;
        color: #fff;
        front-size: 1rem;
        font-weight: bold;
        padding: 10px 40px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform .1s ease-in;
        &:active{
            transform: scale(.9);
        }
        &:focus{
            outline: none;
        }
    }

    button.invert{
        background-color: transparent;
        border-color: #fff;
    }

    form{
        position: absolute;
        top:0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 90px 60px;
        width: calc(50% - 120px);
        height: calc(100% - 180px);
        text-align: center;
        background: linear-gradient(to bottom, #efefef, #ccc);
        transition: all .5s ease-in-out;

        div{
            front-size: 1rem;
        }

        input{
            background-color: #eee;
            border: none;
            padding: 8px 15px;
            margin: 6px 0;
            width: calc(100% - 30%);
            border-radius: 15px;
            border-bottom: 1px solid #ddd;
            box-shadow: insert 0 1px 2px rgba(0, 0, 0, -4),
                               0 -1px 1px #fff,
                               0 1px 0 #fff;
            overflow: hidden;

            &:focus{
                outline: none;
                background-color: #fff;
            }
        }
    }

    .sign-in{
        left: 0;
        z-index: 2;
    }

    .sign-up{
        left: 0;
        z-index: 1;
        opacity: 0;
    }
</style>

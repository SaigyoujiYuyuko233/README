<template>
    <div class="home">
        <div class="header section bg-blue text-grey-lightest less-padding emphasize">
            <div class="container z-10">
                <div class="text-center">
                    <h1 class="text-5xl font-normal">Pterodactyl</h1>
                    <div>
                        <img class="max-w-xs" :src="$withBase('pterodactyl.png')">
                    </div>
                    <h2 class="font-light text-3xl border-0">The open-source server management solution.</h2>
                    <div class="mt-4">
                         <router-link class="btn inline-block" to="/panel/getting_started.html">文档</router-link>
                        <a class="btn hidden md:inline-block" href="https://demo.pterodactyl.io" target="_blank" rel="nofollow noopener">API文档</a>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavLink from './NavLink.vue';
    import Slick from './SlickCarousel.vue';

    export default {
        components: { NavLink, Slick },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0',
                    speed: 1000,
                    autoplay: true,
                    variableWidth: true,
                    arrows: false,
                    dots: true,
                    pauseOnHover: false,
                    pauseOnDotsHover: true,
                },
            }
        },
        computed: {
            data() {
                return this.$page.frontmatter;
            },
            actionLink() {
                return {
                    link: this.data.actionLink,
                    text: this.data.actionText
                };
            }
        },
    };
</script>

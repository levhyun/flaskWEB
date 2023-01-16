Vue.createApp({
    data(){
        return {
            play:true,
            sequence:1,
            snowUnits:[],
        };
    },
    methods:{
        add(){
            this.snowUnits.push(this.sequence++);
        },
        generateSnow(size){
            for(let i=0; i < size; i++){
                this.add();
            }
        },
        beforeEnter(el){
            const offset = -40;
            const min = -offset;
            const max = window.screen.width + offset;
            const left = this.generateRandomInteger(min, max);
            el.style.left = left + "px";

            const scale = this.generateRandom(0.002, 0.4);
            el.style.transform = "scale("+scale+")";

            const opacity = this.generateRandom(0.02, 1);
            el.style.opacity = opacity;

            const delay = this.generateRandom(1, 10000);
            const duration = this.generateRandom(6000, 40000);
            el.style.animationDelay = delay+"ms";
            el.style.animationDuration = duration + "ms";
        },
        generateRandom(begin, end){
            const max = Math.max(begin, end);
            const min = Math.min(begin, end);
            const range = max - min;
            return Math.random() * range + min;
        },
        generateRandomInteger(begin, end){
            return parseInt(this.generateRandom(begin, end));
        }
    },
    mounted(){
        this.generateSnow(500);
    },
}).mount(".snow-wrapper");
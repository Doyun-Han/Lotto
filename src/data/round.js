class Round {
    constructor() {
        this.today = new Date();
        this.count = 1023;
        this.dday = new Date("July 10, 2022 0:00:00");
    }

    async getData() {
        const gap = parseInt((this.today.getTime() - this.dday.getTime()) / 604800000);
        console.log(gap)
        const round = this.count + gap;

        const result = await fetch(`http://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${round}`)
                            .then((res) => res.json())
                            .then((v) => console.log(v))
            return result
    }
}

export default Round
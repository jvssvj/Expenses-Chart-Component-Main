fetch('data.json').then((response) =>{
    response.json().then((week) => {
        document.querySelector('.mon span').innerHTML = week[0].day
        document.querySelector('.tue span').innerHTML = week[1].day
        document.querySelector('.wed span').innerHTML = week[2].day
        document.querySelector('.thu span').innerHTML = week[3].day
        document.querySelector('.fri span').innerHTML = week[4].day
        document.querySelector('.sat span').innerHTML = week[5].day
        document.querySelector('.sun span').innerHTML = week[6].day

        let monGraphic = document.querySelector('.mon-graphic')
        let tueGraphic = document.querySelector('.tue-graphic')
        let wedGraphic = document.querySelector('.wed-graphic')
        let thuGraphic = document.querySelector('.thu-graphic')
        let friGraphic = document.querySelector('.fri-graphic')
        let satGraphic = document.querySelector('.sat-graphic')
        let sunGraphic = document.querySelector('.sun-graphic')

        function graphicPriceOn(boxPriceIndex, weekGraphic, event, boxPriceDisplay, boxPriceJsonIndex) {
            let boxPrice = document.getElementsByClassName('box-price')[boxPriceIndex]

            weekGraphic.addEventListener(event, function(){
                boxPrice.style.display = boxPriceDisplay
                boxPrice.innerHTML = `$${week[boxPriceJsonIndex].amount}`
            })
        }

        function graphicPriceOff(boxPriceIndex, weekGraphic, event, boxPriceDisplay, boxPriceJsonIndex) {
            let boxPrice = document.getElementsByClassName('box-price')[boxPriceIndex]

            weekGraphic.addEventListener(event, function(){
                boxPrice.style.display = boxPriceDisplay
                boxPrice.innerHTML = `$${week[boxPriceJsonIndex].amount}`
            })
        }

        
        graphicPriceOn(0, monGraphic, 'mouseenter', 'flex', 0)
        graphicPriceOff(0, monGraphic, 'mouseout', 'none', 0)

        graphicPriceOn(1, tueGraphic, 'mouseenter', 'flex', 1)
        graphicPriceOff(1, tueGraphic, 'mouseout', 'none', 1)

        graphicPriceOn(2, wedGraphic, 'mouseenter', 'flex', 2)
        graphicPriceOff(2, wedGraphic, 'mouseout', 'none', 2)

        graphicPriceOn(3, thuGraphic, 'mouseenter', 'flex', 3)
        graphicPriceOff(3, thuGraphic, 'mouseout', 'none', 3)

        graphicPriceOn(4, friGraphic, 'mouseenter', 'flex', 4)
        graphicPriceOff(4, friGraphic, 'mouseout', 'none', 4)
        
        graphicPriceOn(5, satGraphic, 'mouseenter', 'flex', 5)
        graphicPriceOff(5, satGraphic, 'mouseout', 'none', 5)
        
        graphicPriceOn(6, sunGraphic, 'mouseenter', 'flex', 6)
        graphicPriceOff(6, sunGraphic, 'mouseout', 'none', 6)
    })
})

window.addEventListener('DOMContentLoaded', () => {
    //main-learn-more
    const learnMoreBtn = document.querySelector('.learn-more'),
          learnMoreDivider = learnMoreBtn.querySelector('.divider_main'),
          mainDescription = document.querySelector('.main__decription'),
          description = document.querySelector('.learn-more-description');


          const hideBtn = document.createElement('div');
          hideBtn.innerHTML = `
          <button class='hide-btn'>
              <span>Скрыть</span>
              <div class="divider divider_main"></div>
          </button>
          `


    learnMoreBtn.addEventListener('mouseover', ()=>{
        learnMoreDivider.style = `width: 130px;
        transition: all .3s ease-in-out`
    })
    learnMoreBtn.addEventListener('mouseout', ()=>{
        learnMoreDivider.style = `width: 104px;
        transition: all .3s ease-in-out`
    })

    learnMoreBtn.addEventListener('click', learnMore);

    function learnMore(){
        description.textContent = `Наши клиенты получают полный спектр услуг по работе с Китаем. 
        Начиная с подбора производителя заканчивая доставкой товара до двери. 
        Настолько прозрачных сделок с Китаем вы еще не осуществляли.
        Мы создаем для вас лучшие условия для перевозок. Вся информация полностью прозрачна
        Также мы даем возможность отслеживать ваши поставки при помощи специального трекера, 
        который выдается при оформлении заказа
        В случае вопросов можете обратиться по телефону +7 (777)-77-77` 

        learnMoreBtn.remove()

        mainDescription.appendChild(hideBtn)
        hideBtn.addEventListener('click', hideText);
        hideBtn.addEventListener('mouseover', ()=>{
            learnMoreDivider.style = `width: 130px;
            transition: all .3s ease-in-out`
        })
        hideBtnWW.addEventListener('mouseout', ()=>{
            learnMoreDivider.style = `width: 104px;
            transition: all .3s ease-in-out`
        })
    }

    function hideText() {
        hideBtn.remove()
        mainDescription.appendChild(learnMoreBtn)
        description.textContent = `
        Наши клиенты получают полный спектр услуг по работе с Китаем. 
        Начиная с подбора производителя заканчивая доставкой товара до двери. 
        Настолько прозрачных сделок с Китаем вы еще не осуществляли.
        Мы создаем для вас лучшие условия для перевозок.
        `
    }



    //Slider

    const sliderWrapper = document.querySelector('.slider__wrapper'),
          sliderCards = document.querySelectorAll('.slider-card'),
          sliderWidth = 393,
          sliderBtns = document.querySelectorAll('.slider-btn');


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
      });

    //slider cards on classes


      class SliderСard {

        constructor(height, width, caption, description) {
            this.height = height;
            this.width = width;
            this.caption = caption;
            this.description = description;
        }

        render(){
            const sliderCard = new SliderCard(100, 200,  )
        }

      }
    

})
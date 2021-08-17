function tabs(tabsSelector, tabsContentSelevtor, tabsParentSelector, activeClass) {
// Создаем табы
    let tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelevtor),
    tabsParent = document.querySelector(tabsParentSelector);

// Скрываем все ненужные нам табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
    });
  
// Мы работаем с классом активности, убираем класс активности у всех табов
    tabs.forEach(item => {
        item.classList.remove(activeClass);
    });
    }
  
// Функция, что наоборот, будет показывать нам табы
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;
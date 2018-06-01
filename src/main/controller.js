import './main.css';

class MainCtrl {

    constructor(){
        this.title = 'HelloWorld!!!';

        $('#teste').kendoComboBox({
            dataSource: {
                data: [1,2,3]
            }
        });
    }

    getComboOptions(){
        return {
            dataSource: {
                data: [1,2,3]
            }
        }
    }

}

export default MainCtrl;

import { module1 } from './modules/module-1';
import { module2 } from './modules/module-2';

class RollupTest {

    constructor( num, str ){
        console.log('RollupTest...');
        this.number = module1( num );
        this.string = module2( str );
    }

}

export default RollupTest;

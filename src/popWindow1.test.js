import Popup from "./pages/Popups/popWindow.js";
import TestRenderer from 'react-test-renderer';

/*unit test for get method (fetching the game content)*/


//testing Popup trigger should be undefined as defualt state
  test('Popup trigger should be undefined', ()=>{
    const testRenderer = TestRenderer.create(<Popup/>);
    const testInstance = testRenderer.root;
  
    expect(testInstance.findByType(Popup).props.trigger).toBe(undefined);
  });



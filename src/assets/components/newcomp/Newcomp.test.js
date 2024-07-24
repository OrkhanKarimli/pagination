import React,{act} from 'react';
import Newcomp from './Newcomp';
import { fireEvent, getAllByText, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import userEvent from '@testing-library/user-event';




// test('newcomp test duration', async() => {
//     act(() => {
//       render(<Newcomp />);
//     });
//      const element = screen.getByText(/teze/i);
//      const element=screen.getByText('teze',{
//          exact:false
//      })
//      expect(element).toBeInTheDocument(); 
//      const element=screen.queryByText("teze ");
//      expect(element).not.toBeInTheDocument();
//      const element= await screen.findByText("sagol");
//      expect(element).toBeInTheDocument();
//   });
// test("yeni test",()=>{
//     render(<Newcomp/>);
//     const element=screen.getAllByText('teze');
//      expect(element[0]).toBeInTheDocument();
//     expect(element).toHaveLength(2);


// })
// test("test ele",async ()=>{
//     render(<Newcomp/>)
//     let element;
//     await waitFor(()=>{
//         element=screen.getByText("as");
//     })
    
//     expect(element).toBeInTheDocument();
// })
// test("test ele",()=>{
//     render(<Newcomp/>);
//     const element=screen.getByLabelText("Salam");
//     expect(element).toBeInTheDocument();
// })
// test("make a test",()=>{
//     render(<Newcomp/>);
//     let element=screen.getByTestId("testing");
//     expect(element).toBeInTheDocument();
// })
// it("make test",()=>{
//     render(<Newcomp/>);
//     let element=screen.getByText("link");
//     expect(element.href).toContain("https://");
// })
// it("test count",async ()=>{
//     const user=userEvent.setup();
//     render(<Newcomp/>);
//    await    user.pointer({
//         keys:'[MouseLeft]',
//         target:screen.getByRole('button')
//     })
//     let element=screen.getByRole("heading");
//     expect(element).toHaveTextContent(1);
// })
test("test radio button",()=>{
    render(<Newcomp/>);
    const chooseOne=screen.getByLabelText('1');
    const chooseTwo=screen.getByLabelText('2');
    expect(chooseOne).toBeInTheDocument();
    expect(chooseTwo).toBeInTheDocument();
    expect(screen.queryByText(/Lorem ipsum/i)).toBeNull();
    fireEvent.click(chooseOne);
    expect(screen.queryByText(/Salam necesen?/i)).toBeInTheDocument();
    expect(screen.queryByText(/Yaxsiyam sen necesen?/i)).toBeNull();
    fireEvent.click(chooseTwo);
    expect(screen.queryByText(/Yaxsiyam sen necesen?/i)).toBeInTheDocument();
    expect(screen.queryByText(/Salam necesen?/i)).toBeNull();

})
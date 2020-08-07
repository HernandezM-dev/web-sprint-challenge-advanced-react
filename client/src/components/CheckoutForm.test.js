import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/State:/i)
    const zipInput = screen.getByLabelText(/Zip:/i)

    
    // await act(async () =>{
    fireEvent.change(firstNameInput, {target: {value: 'Michael'}})
    fireEvent.change(lastNameInput, {target: {value: 'Hernandez'}})
    fireEvent.change(addressInput, {target: {value: '1234 Hello St'}})
    fireEvent.change(cityInput, {target: {value: 'Hello City'}})
    fireEvent.change(stateInput, {target: {value: 'CA'}})
    fireEvent.change(zipInput, {target: {value: 12345}})

    

    const submitbtn = screen.getByRole('button', {name: /Checkout/i})
    fireEvent.click(submitbtn)

    // })

    expect(screen.getByText(/Michael/i)).toBeInTheDocument
screen.debug()
});

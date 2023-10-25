import { ActionFunctionArgs, json, redirect } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { validateFields } from '../customer.validations'

import { ICustomerRepository, CustomerRepository} from '../repository/customer-repository'
import { ICustomer } from '~/domain/cutomer-domain'

const customerRepository = new CustomerRepository()

export async function action( { request } : ActionFunctionArgs ) {

    const fd = await request.formData()

    // const { mobile, name, email, dob  } = Object.fromEntries(fd)

    // if(validateFields({ mobile : String(mobile), name : String(name), email: String(email), dob : String(dob) })) {

    // }

    const name = String(fd.get('name'))
    const mobile = String(fd.get('mobile'))
    const email = String(fd.get('email'))
    const dob = String(fd.get('dob'))

    const err = validateFields({ mobile, name, email, dob })

    if(err.dob.isValid && err.email.isValid && err.mobile.isValid && err.name.isValid) {

        const customer: ICustomer = { name, mobile, email, dob  }

        // try {
        const svd = await customerRepository.create(customer)
        if(svd) return redirect('../customers')

        // } catch (error) {
        //     return json({ err : { msg : 'problem in saving' } })
        // }
    }

    return json({ err })

}

export default function NewCustomer() {

    const ac = useActionData<typeof action>()

    const { err } = ac || {}

    return (
        <section className="container h-[100%]">
            <div className="ml-5 mt-5">
                <h1 className="text-4xl"> New Customer </h1>
            </div>
            <div className="w-[30%] ml-5 shadow-lg p-5 bg-slate-100 mt-5">
                <Form method='post'>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="mobile" className="text-gray-500">Mobile</label>
                        <input type="text" id="mobile" name='mobile' className="px-4 py-2 border" placeholder="Mobile" />
                        <span className={err?.mobile.isValid ? 'text-lime-600' : 'text-red-400'}>{err?.mobile.msg}</span>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="name" className="text-gray-500">Name</label>
                        <input type="text" id="name" name='name' className="px-4 py-2 border" placeholder="Name" />
                        <span className={err?.name.isValid ? 'text-lime-600' : 'text-red-400'}>{err?.name.msg}</span>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="email" className="text-gray-500">Email</label>
                        <input type="email" id="email" name='email' className="px-4 py-2 border" placeholder="Email" />
                        <span className={err?.email.isValid ? 'text-lime-600' : 'text-red-400'}>{err?.email.msg}</span>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="dob" className="text-gray-500">Dob</label>
                        <input type="date" id="dob" name='dob' className="px-4 py-2 border" placeholder="Dob" />
                        <span className={err?.dob.isValid ? 'text-lime-600' : 'text-red-400'}>{err?.dob.msg}</span>
                    </div>
                    <div className="flex justify-center mt-3">
                        <input type="submit" value="Create" className="bg-lime-600 p-2 text-white w-20 hover:bg-lime-700 active:bg-lime-800 rounded-full" />
                    </div>
                </Form>
            </div>

        </section>
    )
}
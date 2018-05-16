import { FormlyFieldConfig } from "@ngx-formly/core";

export class Contact {
    // name: string;
    // phoneNumber: string;
    // email: string;
    // profession:string;


    formFields(): Array<FormlyFieldConfig> {
        return <FormlyFieldConfig[]>[
            {
                template: "<div>I can put HTML TAG using the template property</div>"
            },
            //Input Feild with label
            {  //TextBox
                key: 'name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Name',
                    placeholder: 'Name',
                    required: true,
                 //   disabled:true
                },
                validation: {
                    messages: {
                        required: 'You need to provide name !'
                    }
                }
            },
            {  //PhoneNumber
                key: 'phonenumber',
                type: 'input',
                templateOptions: {
                    type: 'tel',
                    label: 'PhoneNumber',
                    placeholder: 'PhoneNumber',
                    required: true,
                    disabled:true
                },
                //Here we are using the expressionProperties where phoneNumber will be disabled if Name control is empty
                expressionProperties:{
                    'templateOptions.disabled':'!model.name'// can also be written'model.name===undefined'
                },
                validation: {
                    messages: {
                        required: 'You need to provide PhoneNumber !'
                    }
                }
            },
            { //Email
                key: 'email',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email',
                    placeholder: 'Email',
                    required: true
                },
                validation: {
                    messages: {
                        required: 'You need to provide Email !'
                    }
                }
            },
            { //Email
                key: 'confirmEmail',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email',
                    placeholder: 'Email',
                    required: true
                },
                validation: {
                    messages: {
                        required: 'You need to provide Email !'
                    }
                },
                validators:{
                
                }
            },
            { //DropDown
                key: 'profession',
                type: 'select',
                templateOptions: {
                    label: 'Profession',
                    type: 'text',
                    required: true,
                    options: [
                        {
                            label: 'Doctor',
                            value: 'Doctor'
                        },
                        {
                            label: 'Others',
                            value: 'Others'
                        }
                    ]
                },
                validation: {
                    messages: {
                        required: 'Pls select gender'
                    }
                }
            },
            {  //radio
                key: 'gender',
                type: 'radio',
                templateOptions: {
                    label: 'Gender',
                    // type:'text',
                    required: true,
                    options: [
                        {
                            key: 'male',
                            value: 'Male'
                        },
                        {
                            key: 'female',
                            value: 'Female'
                        }
                    ]
                }

            },
            {  //multi-checkbox
                type: 'multicheckbox',
                key: 'interest',
                templateOptions: {
                    options: [
                        {
                            key: 'sports',
                            value: 'Sports',
                        },
                        {
                            key: 'movies',
                            value: 'Movies',
                        },
                        {
                            key: 'others',
                            value: 'Others',
                        }
                    ],
                    label: 'Interest',
                    description: 'Select areas which you are interested',
                }
            },
            {  //TextArea
                key:'Address',
                type:'textarea',
                templateOptions:{
                    rows:5,
                    cols:20,
                    label:'Address'
                }
            }
        ];
    }
}
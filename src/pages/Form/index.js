import React, {useState,useEffect} from 'react'
import { Form, Input, Button, DatePicker ,Cascader,Table, Tag,Modal} from 'antd'
const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
const Formx = () =>{
    const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
    const [form] = Form.useForm()
    const onFinish = value =>{
        console.log(value);
    }
    const [show,setShow] = useState(false)
    const dataObj = {
        user:'0',
        password:'999'
    }
    useEffect(() => {
        form.setFieldsValue({
            user:'666'
        })
    }, []);
    function submit(){
        form.submit()
    }
    function onValuesChange(val,vals){
        console.log(val)
        console.log(vals)
    }
    function getValueFromEvent(value){
        return value
    }
    function onChange(value,selectedOptions) {
        console.log(selectedOptions)
    }
    function Delete(val,vals){
        console.log(val)
        console.log(vals)
        setShow(true)
    }
    function handleOk(e){
        console.log(e)
        setShow(false)
    }
    function handleCancel(e){
        setShow(false)
    }
    return(
        <div className="Form">
            <Form
                onFinish={onFinish}
                name="baise"
                initialValues={
                    dataObj
                }
                onValuesChange={onValuesChange}
                form={form}
                >
                <Form.Item
                    label="Username"
                    extra="提示信息"
                    name="user"
                    normalize={getValueFromEvent}
                    rules={[
                        {
                            required: true,
                            message:'写错了'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                >
                   <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                <Form.Item
                    label="select"
                    name="select"
                >
                    <Cascader
                        options={options}>

                    </Cascader>
                </Form.Item>
                <Form.Item
                    label="日期"
                    name="date"
                >
                <DatePicker onChange={onChange} format="YYYY-MM-DD HH:mm:ss" />
                </Form.Item>
            </Form>
            <Button danger  style={{margin:'0px auto'}} onClick={submit}>提交</Button>

            <Table dataSource={data}>
                <ColumnGroup title="Name">
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
                </ColumnGroup>
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <span>
                    {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                        {tag}
                        </Tag>
                    ))}
                    </span>
                )}
                />
                <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <span onClick={() =>Delete(text,record)}>
                    <a style={{ marginRight: 16 }}>Invite {record.lastName}</a>
                    <a>Delete</a>
                    </span>
                )}
                />
            </Table>
            <Modal
                title="Basic Modal"
                visible={show}
                onOk={handleOk}
                confirmLoading={false}
                onCancel={handleCancel}
                >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}
export default Formx
import React,{Component} from 'react';
import './index.css';
import { Card,Input,Button,Upload,Modal} from 'antd';
import {UserOutlined,SearchOutlined,BellOutlined,PlusOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
export default class Zlei extends Component{
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        }

        handleCancel = () => this.setState({ previewVisible: false });

        handlePreview = async file => {
          if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
          }
      
          this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
          });
        };
      
        handleChange = ({ fileList }) => this.setState({ fileList });

    state = {
        value: '',
      };
    
      onChange = ({ target: { value } }) => {
        this.setState({ value });
      };
    
    render(){
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 4 }}>上传</div>
          </div>
        );
     //  
        const { TextArea } = Input;  
        const { value } = this.state; 
        const onChange = e => {
            console.log(e);
          };
       
        return(
            <div>
            <div className="xhead">
            <div className="div6"><Button icon={<UserOutlined />} type="link">admin</Button></div>
            <div className="div5"><BellOutlined /></div>
            <div className="div4"><SearchOutlined /></div>
            <div className="fbody">
                <div><Link to="fenlei">分类列表</Link>/新增分类</div>
              
              <Card className="fenl">
           
                <div>
                   <div>分类名称</div>
                     <Input placeholder="请输入商品名" 
                                allowClear 
                                size="small"
                                className="fname"
                                onChange={onChange} />     
                    </div>

                <div>
                    <div>商品图片</div>
                    <Modal
          ariaHideApp={false}
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="image" style={{ width: '100%'  }} src={previewImage} />
        </Modal>
        <Upload
          listType="picture-card"
         fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >  
        {fileList <= 4 ? null : uploadButton}
         
        </Upload>
                 </div>
                    
                     <div>
                        <p className="maio">分类描述</p>  
                     <TextArea
                      className="fenmiao"
                        value={value}
                        allowClear
                          onChange={this.onChange}
                        placeholder="描述..."
                          autoSize={{ minRows: 3, maxRows: 5 }}
                   />
                     </div>
                      </Card>
                      <div>
                      <Card type="inner" hoverable="flase">
                         <div>
                            <Button onClick={()=>{alert('保存成功')
                                        window.location.href='/shoplist'}} className="button-2" type="primary">保存</Button>
                        </div>
                        <div>
                        <Button className="button-3">取消</Button>
                        </div>
                        </Card>
                          </div>
                         </div>
                          </div>
                 </div>      
               
        );
        }
        }
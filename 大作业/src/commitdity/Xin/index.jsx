import React,{Component} from 'react';
import {Button, Card,Input,Image,Tag,Radio,Upload} from 'antd';
import {UserOutlined,BellOutlined,SearchOutlined,PlusOutlined,UploadOutlined} from '@ant-design/icons';
import {TweenOneGroup} from 'rc-tween-one';
import {Link} from 'react-router-dom';
import './index.css'



export default class Xin extends Component{

  //描述
    state = {
        value: '',
      };
    
      onChange = ({ target: { value } }) => {
        this.setState({ value });
      };
    //分类

    state = {
        tags: ['裤子', '衣服'],
        inputVisible: false,
        inputValue: '',
      };
    
      handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
      };
    
      showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
      };
    
      handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
      };
    
      handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
          tags,
          inputVisible: false,
          inputValue: '',
        });
      };
    
      saveInputRef = input => {
        this.input = input;
      };
    
      forMap = tag => {
        const tagElem = (
          <Tag
            closable
            color="orange"
            onClose={e => {
              e.preventDefault();
              this.handleClose(tag);
            }}
          >
            {tag}
          </Tag>
        );
        return (
          <span key={tag} style={{ display: 'inline-block' }}>
            {tagElem}
          </span>
        );
      };
   
//标签
      state = {
        tags: ['热卖', '瘦身'],
        inputVisible: false,
        inputValue: '',
      };
    
      handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
      };
    
      showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
      };
      showInput2 = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
      };
    
      handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
      };
    
      handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
          tags,
          inputVisible: false,
          inputValue: '',
        });
      };
    
      saveInputRef = input => {
        this.input = input;
      };
    
      forMap = tag => {
        const tagElem = (
          <Tag
            closable
            color="green"
            onClose={e => {
              e.preventDefault();
              this.handleClose(tag);
            }}
          >
            {tag}
          </Tag>
        );
        return (
          <span key={tag} style={{ display: 'inline-block' }}>
            {tagElem}
          </span>
        );

      };
    

    render(){
        const { value } = this.state;
        const { tags, inputVisible, inputValue } = this.state;
        const tagChild = tags.map(this.forMap);

        const {Tags, IsnputVisible, InputValue, editInputIndex, editInputValue}  = this.state;
        const { TextArea } = Input;
        const onChange = e => {
            console.log(e);

            const { value } = this.state;
    };
    

        return(
        
            <div>
            <div className="xhead">
            <div className="div6"><Button icon={<UserOutlined />} type="link">admin</Button></div>
            <div className="div5"><BellOutlined /></div>
            <div className="div4"><SearchOutlined /></div>
            <div className="xbody">
                <div><Link to="/shoplist">商品列表</Link>/新增商品</div>
                <Card className="xcard">
                  基础信息
            <div>
                       <div>
                 商品名称: <Input placeholder="请输入商品名" 
                                allowClear 
                                size="small"
                                className="mname"
                                onChange={onChange} />     
                       </div> 
                       <div>
                            价格: <Input placeholder="请输入商品价格" 
                                         className="price" 
                                         prefix="￥" 
                                         allowClear 
                                         size="small"
                                         suffix="RMB" />
                       </div> 
                       <div>
                            原价: <Input placeholder="请输入商品原价" 
                                allowClear 
                                size="small"
                                className="yprice"
                                onChange={onChange} /> 
                        </div> 
                        <div>
                            SKU:  <Input placeholder="请输入商品SKU" 
                                allowClear 
                                size="small"
                                className="sku"
                                onChange={onChange} /> 
                        </div> 
                        <div>
                            商品分类:
                        <div>
                        <div style={{ marginBottom: 12 }}>
                            <TweenOneGroup
                             enter={{
                               scale: 0.8,
                            opacity: 0,
                            type: 'from',
                           duration: 100,
                            onComplete: e => {
                             e.target.style = '';
                                            },
                                              }}
                             leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                            appear={false}
                             >
                               {tagChild}
                            </TweenOneGroup>
                           </div>

                            {inputVisible && (
                              <Input
                               ref={this.saveInputRef}
                               type="text"
                              size="small"
                              style={{ width: 78 }}
                               value={inputValue}
                               onChange={this.handleInputChange}
                               onBlur={this.handleInputConfirm}
                             onPressEnter={this.handleInputConfirm}
            />
                            )}
                            {!inputVisible && (
                          <Tag onClick={this.showInput2} className="site-tag-plus" color="orange">
                           <PlusOutlined />添加分类
                         </Tag>
                              )}
                    </div>
                    </div>

                          <div>
                              商品标签:
                              <div style={{ marginBottom: 12 }}>
                            <TweenOneGroup
                             enter={{
                               scale: 0.8,
                            opacity: 0,
                            type: 'from',
                           duration: 100,
                            onComplete: e => {
                             e.target.style = '';
                                            },
                                              }}
                             leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                            appear={false}
                             >
                               {tagChild}
                            </TweenOneGroup>
                           </div>

                            {inputVisible && (
                              <Input
                               ref={this.saveInputRef}
                               type="text"
                              size="small"
                              style={{ width: 78 }}
                               value={inputValue}
                               onChange={this.handleInputChange}
                               onBlur={this.handleInputConfirm}
                             onPressEnter={this.handleInputConfirm}
            />
                            )}
                            {!inputVisible && (
                          <Tag onClick={this.showInput} className="tag-plus" color="green">
                           <PlusOutlined />添加标签
                         </Tag>
                              )}
                    </div>
                          </div>
                        <div>
                            是否上架:
                            <Radio.Group name="radiogroup" defaultValue={1}>
                                 <Radio value={1}>是</Radio>
                                 <Radio value={2}>否</Radio>
                      </Radio.Group>

                        </div>
                        <div>
                            商品图片:  
                             <Upload>
                         <Button icon={<UploadOutlined />} size="small">图片</Button>
                           </Upload>
                        </div>
                        <div>
                            商品详情:
                            
                            <TextArea
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
                            <Button onClick={()=>{
                              alert('保存成功')
                              window.location.href='/shoplist'
                            }} className="button-1">保存</Button>
                        </div>
                        </Card>
                    </div>
            </div>
            
            </div>
        
            </div>
        )
    }
}
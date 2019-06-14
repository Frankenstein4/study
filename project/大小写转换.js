            
          //小转大  
            var a="syfhcgly";
            a=a.toUpperCase();
            console.log(a);

         //大转小
            var b="insert into t4 (MISSION_NO,COMPANY,PA_CODE ,SEQ_ID ,PIC_ID,NOTES,OBJID,OBJVERSION )";
            b=b.toLowerCase();
            console.log(b);
            //即b=create table if not exists t1 ( mission_no varchar(80)  not null ,company varchar(800),description varchar(800) ,create_date varchar(800) ,create_man varchar(800),create_user varchar(800),remark varchar(4000),line_no varchar(800),is_download varchar(20),objid varchar(800),objversion varchar(4000),objstate varchar(120),objevents varchar(1012),state varchar(1012),primary key ( mission_no))


            //即 b=create table if not exists t8 ( mission_no varchar(80)  not null ,line_no varchar( 800 ) not null ,req_no varchar(400),pa_desc varchar(800),type_designation varchar(1600),external_id varchar(800),license_plate varchar(800),use_dept varchar(80),use_deptname varchar(800),object_owner varchar(80),object_ownername varchar(80),dept_manager varchar(80),dept_managername varchar(800),product_vendor varchar(400),code_g varchar(80),code_name varchar(800),scan_flag varchar(20),check_date varchar(800),check_flag varchar(20),checker_id varchar(80),fao_item_price varchar(800),fao_item_qty varchar(800),notes varchar(4000),loss_flag varchar(20),new_flag varchar(20),pa_code varchar(160),loc_id varchar(160),loc_name varchar(800),bar_code_size_id varchar(40),bar_code_attr_id varchar(40),process_type varchar(800),process_req_no varchar(800),process_req_line varchar(800),loss_reason varchar(4000),dept_obligation varchar(4000),dept_process_option varchar(4000),check_is_change varchar(20),acquisition_date varchar(800),picture_num varchar(800),objid varchar(800),objversion varchar(4000),objstate varchar(120),objevents varchar(1012),state varchar(1012),estimatedlife varchar(500),mchcode varchar(500),mchname varchar(500),objectclassid varchar(500),objectclassname varchar(500),company varchar(800),mission_flag varchar(1012), primary key ( mission_no,line_no));
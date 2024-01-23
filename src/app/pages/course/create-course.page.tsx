import { INITIAL_VALUES, SystemMessage, localStorageKeys } from '@app/common/constants';
import { formFields } from '@app/common/constants/const';
import Button from '@app/components/button';
import DropDown from '@app/components/dropdown';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import { addToast } from '@app/components/toast/toast.service';
import CourseService from '@app/services/http/course.service';
import { User } from '@app/types';
import { CreateCourseInitialValues } from '@app/types/course.type';
import { FieldType } from '@app/types/helper';
import { createCourseValidationSchema } from '@app/validations/course.validation';
import backgroundUser from '@assets/images/background/backgroundUser.png';
import useObservable from '@core/hooks/use-observable.hook';
import StorageService from '@core/services/storage';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function CreateCourse() {
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<CreateCourseInitialValues>>();
  const { subscribeOnce } = useObservable();
  const navigate = useNavigate();
  const storedUserInfo = StorageService.getObject(localStorageKeys.USER_INFO) as User;
  const [majorList, setMajorList] = useState<any[]>([]);

  useEffect(() => {
    subscribeOnce(CourseService.getAllMajors(), (majorsData) => {
      setMajorList(majorsData.data);
    });
  }, []);
  const handleSubmit = (values: CreateCourseInitialValues) => {
    console.log(values);
    subscribeOnce(CourseService.create({ ...values, level: 'beginner' }), (res) => {
      addToast({ text: SystemMessage.NEXT_STEP, position: 'top-right' });
      //   res && navigate(PATHS.LOGIN);
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundUser})` }}
    >
      <div className="w-1/2 flex items-center rounded-[10px] bg-white shadow-6 ">
        <div className="w-1/2 flex-1 text-center rounded border-gray-300 p-4 ">
          <h2 className="text-[50px] font-bold text-center">{t('create-course.create')}</h2>
          <Formik
            displayName="CreateCourseForm"
            initialValues={INITIAL_VALUES.CREATE_COURSE as any}
            onSubmit={handleSubmit}
            innerRef={formRef}
            validationSchema={createCourseValidationSchema}
            validateOnChange
            validateOnBlur
          >
            <Form className="w-3/4 mx-auto p-8 ">
              {formFields.create_course.map((field, index) => (
                <FormControl key={index} name={field.name}>
                  <Input
                    width="auto"
                    className=" !max-w-none w-full mb-10 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                    placeholder={t(field.placeholder)}
                    inputClassName="w-full"
                    errorClassName="text-red-500 text-xs"
                    type={field.type as FieldType}
                  />
                </FormControl>
              ))}
              <FormControl name={formFields.create_course_2[0].name}>
                <DropDown
                  items={majorList}
                  defaultValue={t('create-course.major')}
                  fieldName={'_id'}
                  displayProp={'title'}
                  formikField={'major'}
                />
              </FormControl>
              <Button
                type="submit"
                label={t('create-course.button')}
                width="w-full"
                size="m"
                className="rounded-[10px] mt-7 bg-teal-500 hover:bg-teal-800"
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
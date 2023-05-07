import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Atoms/Input";
import InputBox from "../components/Atoms/InputBox";
import WriterOption from "../components/Organisms/WriteOption";
import Button from "../components/Atoms/Button";

function WritePoem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  const [isWriteOptionVisible, setIsWriteOptionVisible] = useState(false); // 추가

  return (
    <>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Input
          {...register("title", {
            required: "Your is wrong",
            minLength: {
              value: 1,
              message: "Your title is Too short",
            },
            maxLength: {
              value: 100,
              message: "Your title is Too long",
            },
          })}
          placeholder="제목을 입력해주세요"
        />
        <Button
          onClick={(event) => {
            event.preventDefault();
            setIsWriteOptionVisible(true); // 등록 버튼 클릭 시 WriteOption 컴포넌트를 보여주도록 변경
          }}
        >
          등록
        </Button>
        <InputBox
          {...register("content", {
            required: "Your is wrong",
            minLength: {
              value: 1,
              message: "Your content is Too short",
            },
            maxLength: {
              value: 5000,
              message: "Your content is Too long",
            },
          })}
          placeholder="내용을 입력해주세요"
        />
        <input type="submit" />
      </form>
      <div>{errors?.title?.message}jkasldjflksda</div>
      <div>{errors?.content?.message}jkasldjflksda</div>
      {isWriteOptionVisible && <WriterOption />} {/* 추가 */}
    </>
  );
}

export default WritePoem;

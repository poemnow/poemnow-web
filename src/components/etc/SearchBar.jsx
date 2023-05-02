import { useForm } from "react-hook-form";
import api from "../../utils/api";
export default function SearchBar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitSearch = () => {
    api("/search/poem", "GET");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitSearch)}>
        <input
          {...register("searchKeyword", {
            required: "검색어를 입력해주세요!",
          })}
          type="text"
          placeholder="검색어를 입력해주세요"
        />
      </form>
      {errors ? <div>{errors.SearchBar?.message}</div> : null}
    </div>
  );
}

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  task: z.string().min(1),
});

type formdata = z.infer<typeof schema>;

interface Props {
  submit: (data: formdata) => void;
}

const Todoinput = ({ submit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formdata>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="con">
      <form
        onSubmit={handleSubmit((data) => {
          submit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="task" className=" from-head form-label">
            <h3 className="display-3">To Do</h3>
          </label>
          <input
            {...register("task")}
            id="task"
            type="text"
            className="form-input form-control"
            placeholder="Enter your task"
          />
          {errors.task && <p className="text-danger">{errors.task.message}</p>}
        </div>
        <button className="btn btn-outline-warning">Add Task</button>
      </form>
    </div>
  );
};

export default Todoinput;

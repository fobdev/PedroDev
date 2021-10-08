import { Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const MUIPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="Material UI Projects" image={image} growIn={growIn}>
            <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque
                mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem
                accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam!
                Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur
                nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum
                fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam
                temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id
                obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe
                recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem
                doloribus rem amet nobis impedit aliquid enim.
            </Typography>
        </Project>
    );
};
export default MUIPage;

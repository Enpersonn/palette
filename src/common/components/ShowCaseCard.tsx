import styled from "styled-components";

type ShowCaseCardProps = {
    title?: string;
    description?: string;
    children: React.ReactNode;
};

const ShowCaseCardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    border: 1px solid #616161;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to bottom left, #3cb47216, #3cb4726c);
    text-align: center;


    h2 {
        margin: 0;
    }
    p {
        margin: 0;
    }
`;

export default function ShowCaseCard({ title, description, children }: ShowCaseCardProps) {
    return (
        <ShowCaseCardBody>
            <p className=" text-5xl">{title}</p>
            {children}
            <p>{description}</p>
        </ShowCaseCardBody>
    );
}
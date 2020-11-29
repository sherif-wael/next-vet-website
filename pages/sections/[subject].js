import styled from "styled-components";
import { mixins } from "../../styles";
import Layout from "../../components/layout";
import data from "../../subjects";

export default function Sections({lectures}){
    return (
        <Layout>

        </Layout>
    )
}


export async function getStaticPaths(){
    let {allSubjects} = data;
    let paths = allSubjects.map(subject => (
        {
            params: {
                subject: subject.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)
            }
        }
    ))

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({params}){
    let subject = params.subject.replace(/-(\w)/g, (m, l) => l.toUpperCase());
    let {sections} = data.subjects[subject];

    return {
        props: {
            sections
        }
    }
}
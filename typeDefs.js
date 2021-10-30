// const { gql } = require('apollo-server');

// module.exports = gql`
//   type Query {
//     patient(id: ID!): Patient
//     doctor(id: ID!): Doctor
//   }

//   type Patient {
//     id: ID!
//     name: String!
//     doctors: [Doctor]
//   }

//   type Doctor {
//     id: ID
//     name: String
//     patients: [Patient]
//   }

//   type Mutation {
//     createAppointment(
//       input: CreateAppointmentRequest!
//     ): CreateAppointmentResponse
//   }

//   input CreateAppointmentRequest {
//     patient_id: ID!
//     doctor_id: ID!
//     date: String
//   }
//   type CreateAppointmentResponse {
//     appointment: Appointment
//   }

//   type Appointment {
//     id: ID
//     patient_id: String
//     doctor_id: String
//     date: String
//   }
// `;



const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    meteor(id: ID!): Meteor
  }

  type Meteor {
      id: ID
      name: String
	  status: String
      activeYN: Boolean
      description: String
      velocity: String
      speedQual: Int
      veloNum: Int
  }
  `;

module.exports = typeDefs;  
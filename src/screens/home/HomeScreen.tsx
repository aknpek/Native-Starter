import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type FreelancerCategoryProps = {
  title: string;
  // Define other props like data array if needed
};

const FreelancerCategory: React.FC<FreelancerCategoryProps> = ({ title }) => {
  // Ideally, you would fetch and map data from your backend or state management
  const renderFreelancers = () => {
    // Placeholder for freelancer rendering
    return [1, 2, 3].map((_, index) => (
      <View key={index} style={styles.freelancerCard}>
        <View style={styles.profilePicture} />
        <Text style={styles.freelancerName}>Name</Text>
        <Text style={styles.freelancerStatus}>Online</Text>
      </View>
    ));
  };

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <ScrollView horizontal>{renderFreelancers()}</ScrollView>
    </View>
  );
};

const HomePage = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.searchInput} />
      <FreelancerCategory title="Barbers" />
      <FreelancerCategory title="Photographers" />
      <FreelancerCategory title="Nail Artists" />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  categoryContainer: {
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 18,
    marginLeft: 10,
  },
  freelancerCard: {
    width: 100,
    margin: 10,
    alignItems: "center",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#cccccc",
  },
  freelancerName: {
    marginTop: 5,
  },
  freelancerStatus: {
    fontSize: 12,
    color: "green",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  footerButton: {
    alignItems: "center",
  },
});

export default HomePage;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Home = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.HomeContainer}>
      <View style={styles.TopContainer}>
        <View style={styles.NameEmail}>
          <Text style={styles.Text1}>{name ?? "Eric Atsu"}</Text>
          <Text style={styles.Text2}>{email ?? "ericatsu@gmail.com"}</Text>
        </View>
        <View style={styles.ProfilePic}>
          <Image
            style={styles.HumanProfile}
            source={require("../assets/Profile.png")}
          />
          <Image
            style={styles.Redpoint}
            source={require("../assets/RedEclipse.png")}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchContainerA}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
          />
          <Feather
            style={styles.searchIcon}
            name="search"
            size={24}
            color="grey"
          />
        </View>
        <View style={styles.searchContainerB}>
          <TouchableOpacity>
            <Image
              style={styles.buttomPicture}
              source={require("../assets/filter.5.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.featuredJobsContainer}>
        <View style={styles.textDescription}>
          <Text style={styles.Text3}>Featured Jobs</Text>
          <Text style={styles.Text4}>See all</Text>
        </View>
        <View style={styles.featuredJobCardContainer}>
          <ScrollView horizontal={true} style={styles.scroll}>
            <View style={styles.featuredJobcard1}>
              <View style={styles.featuredJobminiCard}>
                <View style={styles.featuredJobLogoPositionCompanyName}>
                  <View style={styles.featuredJobLogo}>
                    <View style={styles.IconBackground}>
                      <Image
                        style={styles.Icon}
                        source={require("../assets/LilFacebook.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.featuredJobPositionCompanyName}>
                    <Text style={styles.featuredJobPosition}>
                      Software Engineer
                    </Text>
                    <Text style={styles.featuredJobCompanyName}>Facebook</Text>
                  </View>
                </View>
                <View style={styles.featuredJobSalaryLocation}>
                  <Text style={styles.featuredJobSalary}>$190,000</Text>
                  <Text style={styles.featuredJobLocation}>Texas, US</Text>
                </View>
              </View>
            </View>

            <View style={styles.featuredJobcard3}>
              <View style={styles.featuredJobminiCard}>
                <View style={styles.featuredJobLogoPositionCompanyName}>
                  <View style={styles.featuredJobLogo}>
                    <View style={styles.IconBackground}>
                      <Image
                        style={styles.Icon}
                        source={require("../assets/lilTikTok.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.featuredJobPositionCompanyName}>
                    <Text style={styles.featuredJobPosition}>
                      Software Engineer
                    </Text>
                    <Text style={styles.featuredJobCompanyName}>TikTok</Text>
                  </View>
                </View>
                <View style={styles.featuredJobSalaryLocation}>
                  <Text style={styles.featuredJobSalary}>$108,000</Text>
                  <Text style={styles.featuredJobLocation}>Chicago, US</Text>
                </View>
              </View>
            </View>
            <View style={styles.featuredJobcard4}>
              <View style={styles.featuredJobminiCard}>
                <View style={styles.featuredJobLogoPositionCompanyName}>
                  <View style={styles.featuredJobLogo}>
                    <View style={styles.IconBackground}>
                      <Image
                        style={styles.Icon}
                        source={require("../assets/lilAws.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.featuredJobPositionCompanyName}>
                    <Text style={styles.featuredJobPosition}>
                      Database Engineer
                    </Text>
                    <Text style={styles.featuredJobCompanyName}>
                      Amazon Web Services
                    </Text>
                  </View>
                </View>
                <View style={styles.featuredJobSalaryLocation}>
                  <Text style={styles.featuredJobSalary}>$900,900</Text>
                  <Text style={styles.featuredJobLocation}>
                    Toronto, Canada
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.featuredJobcard5}>
              <View style={styles.featuredJobminiCard}>
                <View style={styles.featuredJobLogoPositionCompanyName}>
                  <View style={styles.featuredJobLogo}>
                    <View style={styles.IconBackground}>
                      <Image
                        style={styles.Icon}
                        source={require("../assets/lilMicrosoft.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.featuredJobPositionCompanyName}>
                    <Text style={styles.featuredJobPosition}>
                      Security Engineer
                    </Text>
                    <Text style={styles.featuredJobCompanyName}>Microsoft</Text>
                  </View>
                </View>
                <View style={styles.featuredJobSalaryLocation}>
                  <Text style={styles.featuredJobSalary}>$708,200</Text>
                  <Text style={styles.featuredJobLocation}>California, US</Text>
                </View>
              </View>
            </View>
            <View style={styles.featuredJobcard2}>
              <View style={styles.featuredJobminiCard}>
                <View style={styles.featuredJobLogoPositionCompanyName}>
                  <View style={styles.featuredJobLogo}>
                    <View style={styles.IconBackground}>
                      <Image
                        style={styles.Icon}
                        source={require("../assets/lilGoogle.png")}
                      />
                    </View>
                  </View>

                  <View style={styles.featuredJobPositionCompanyName}>
                    <Text style={styles.featuredJobPosition}>
                      DevOps Engineer
                    </Text>
                    <Text style={styles.featuredJobCompanyName}>Google</Text>
                  </View>
                </View>
                <View style={styles.featuredJobSalaryLocation}>
                  <Text style={styles.featuredJobSalary}>$290,000</Text>
                  <Text style={styles.featuredJobLocation}>Florida, US</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.popularJobsContainer}>
        <View style={styles.textDescription}>
          <Text style={styles.Text3}>Popular Jobs</Text>
          <Text style={styles.Text4}>See all</Text>
        </View>
        <View style={styles.popularJobsCardContainer}>
          <ScrollView>
            <View style={styles.popularJobcards}>
              <View style={styles.popularJobsCardLogoContainer}>
                <View style={styles.IconBackground}>
                  <Image
                    style={styles.Icon}
                    source={require("../assets/lilBurger.png")}
                  />
                </View>
              </View>
              <View style={styles.popularJobsPositionCompanyNameContainer}>
                <Text style={styles.popularJobsPosition}>Jr Executive</Text>
                <Text style={styles.popularJobsCompanyName}>Burger King</Text>
              </View>
              <View style={styles.popularJobsCardSalaryLocationContainer}>
                <Text style={styles.popularJobsSalary}>$198,00/y</Text>
                <Text style={styles.popularJobsCompanyLocation}>
                  Tokyo, Japan
                </Text>
              </View>
            </View>
            <View style={styles.popularJobcards}>
              <View style={styles.popularJobsCardLogoContainer}>
                <View style={styles.IconBackground}>
                  <Image
                    style={styles.Icon}
                    source={require("../assets/lilBeats.png")}
                  />
                </View>
              </View>
              <View style={styles.popularJobsPositionCompanyNameContainer}>
                <Text style={styles.popularJobsPosition}>Product Manager</Text>
                <Text style={styles.popularJobsCompanyName}>Beats</Text>
              </View>
              <View style={styles.popularJobsCardSalaryLocationContainer}>
                <Text style={styles.popularJobsSalary}>$149,000/y</Text>
                <Text style={styles.popularJobsCompanyLocation}>
                  Florida, US
                </Text>
              </View>
            </View>
            <View style={styles.popularJobcards}>
              <View style={styles.popularJobsCardLogoContainer}>
                <View style={styles.IconBackground}>
                  <Image
                    style={styles.Icon}
                    source={require("../assets/LilFacebook.png")}
                  />
                </View>
              </View>
              <View style={styles.popularJobsPositionCompanyNameContainer}>
                <Text style={styles.popularJobsPosition}>Product Manager</Text>
                <Text style={styles.popularJobsCompanyName}>Facebook</Text>
              </View>
              <View style={styles.popularJobsCardSalaryLocationContainer}>
                <Text style={styles.popularJobsSalary}>$290,000/y</Text>
                <Text style={styles.popularJobsCompanyLocation}>
                  Florida, US
                </Text>
              </View>
            </View>
            <View style={styles.popularJobcards}>
              <View style={styles.popularJobsCardLogoContainer}>
                <View style={styles.IconBackground}>
                  <Image
                    style={styles.Icon}
                    source={require("../assets/lilAws.png")}
                  />
                </View>
              </View>
              <View style={styles.popularJobsPositionCompanyNameContainer}>
                <Text style={styles.popularJobsPosition}>
                  Solutions Architect
                </Text>
                <Text style={styles.popularJobsCompanyName}>
                  Amazon Web Services
                </Text>
              </View>
              <View style={styles.popularJobsCardSalaryLocationContainer}>
                <Text style={styles.popularJobsSalary}>$700,000/y</Text>
                <Text style={styles.popularJobsCompanyLocation}>
                  Cape Town, Africa
                </Text>
              </View>
            </View>
            <View style={styles.popularJobcards}>
              <View style={styles.popularJobsCardLogoContainer}>
                <View style={styles.IconBackground}>
                  <Image
                    style={styles.Icon}
                    source={require("../assets/lilGoogle.png")}
                  />
                </View>
              </View>
              <View style={styles.popularJobsPositionCompanyNameContainer}>
                <Text style={styles.popularJobsPosition}>
                  Software Engineer
                </Text>
                <Text style={styles.popularJobsCompanyName}>Google</Text>
              </View>
              <View style={styles.popularJobsCardSalaryLocationContainer}>
                <Text style={styles.popularJobsSalary}>$800,000/y</Text>
                <Text style={styles.popularJobsCompanyLocation}>
                  Tokyo, Japan
                </Text>
              </View>
            </View>
            <View style={styles.popularJobcards}>
              <View style={styles.popularJobsCardLogoContainer}>
                <View style={styles.IconBackground}>
                  <Image
                    style={styles.Icon}
                    source={require("../assets/lilTikTok.png")}
                  />
                </View>
              </View>
              <View style={styles.popularJobsPositionCompanyNameContainer}>
                <Text style={styles.popularJobsPosition}>
                  Infrastructure Engineer
                </Text>
                <Text style={styles.popularJobsCompanyName}>TikTok</Text>
              </View>
              <View style={styles.popularJobsCardSalaryLocationContainer}>
                <Text style={styles.popularJobsSalary}>$990,000/y</Text>
                <Text style={styles.popularJobsCompanyLocation}>
                  London, UK
                </Text>
              </View>
            </View>
            <View style={styles.popularJobcards}>
              <View style={styles.popularJobsCardLogoContainer}>
                <View style={styles.IconBackground}>
                  <Image
                    style={styles.Icon}
                    source={require("../assets/lilMicrosoft.png")}
                  />
                </View>
              </View>
              <View style={styles.popularJobsPositionCompanyNameContainer}>
                <Text style={styles.popularJobsPosition}>
                  Solutions Architect
                </Text>
                <Text style={styles.popularJobsCompanyName}>Microsoft</Text>
              </View>
              <View style={styles.popularJobsCardSalaryLocationContainer}>
                <Text style={styles.popularJobsSalary}>$900,000/y</Text>
                <Text style={styles.popularJobsCompanyLocation}>
                  Zurich, Switzerland
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    display: "flex",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "space-evenly",
  },
  TopContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 55,
    width: "100%",
    paddingTop: 2,
    paddingBottom: 2,
  },
  NameEmail: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "78%",
  },
  Text1: {
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 36,
  },
  Text2: {
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.5,
    lineHeight: 24,
    top: -3,
  },
  ProfilePic: {
    width: "18%",
    alignItems: "center",
    justifyContent: "center",
  },
  HumanProfile: {
    height: 40,
    width: 40,
    alignSelf: "center",
    position: "fixed",
    top: 5,
  },
  Redpoint: {
    width: 10,
    height: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    top: -30,
    left: 12,
    zIndex: 1,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    height: 55,
    width: "100%",
    marginTop: 30,
    paddingTop: 2,
    paddingBottom: 2,
  },
  searchContainerA: {
    width: "78%",
  },
  searchContainerB: {
    width: "18%",

    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    fontSize: 15,
    borderRadius: 17,
    backgroundColor: "#F2F2F3",
    paddingLeft: 40,
    height: "100%",
    width: "100%",
  },
  searchIcon: {
    top: -38,
    left: 8,
  },
  buttomPicture: {
    backgroundColor: "#F2F2F3",
    height: 50,
    width: 50,
    alignSelf: "center",
    borderRadius: 20,
  },
  featuredJobsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 280,
    width: "100%",
    marginTop: 30,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: "center",
  },

  textDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
    width: "99%",
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 7,
  },
  Text3: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0d0d26",
  },
  Text4: {
    fontSize: 13,
    fontWeight: "400",
    opacity: 0.5,
  },
  featuredJobCardContainer: {
    display: "flex",
    flexDirection: "row",
    height: 240,
    width: "99%",
    paddingTop: 2,
    paddingBottom: 2,
    padding: 3,
  },

  scroll: {
    flexDirection: "row",
  },
  featuredJobcard1: {
    width: 280,
    height: 200,
    marginRight: 10,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1877F2",
  },

  featuredJobcard2: {
    width: 280,
    height: 200,
    backgroundColor: "#e33629",
    marginRight: 10,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  featuredJobcard3: {
    width: 280,
    height: 200,
    backgroundColor: "#000",
    marginRight: 10,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  featuredJobcard4: {
    width: 280,
    height: 200,
    backgroundColor: "#f90",
    marginRight: 10,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  featuredJobcard5: {
    width: 280,
    height: 200,
    backgroundColor: "#80cc28",
    marginRight: 10,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  featuredJobminiCard: {
    width: 250,
    height: 180,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  featuredJobLogoPositionCompanyName: {
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 2,
    paddingBottom: 2,
  },
  featuredJobLogo: {
    width: "23%",

    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
  IconBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  featuredJobPositionCompanyName: {
    width: "74%",

    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 10,
  },
  featuredJobSalaryLocation: {
    width: "100%",
    height: 40,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  featuredJobPosition: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  featuredJobCompanyName: {
    fontSize: 14,
    fontWeight: "400",
    color: "#ffffff",
    opacity: 0.7,
  },
  featuredJobSalary: {
    fontSize: 14,
    fontWeight: "400",
    color: "#ffffff",
  },
  featuredJobLocation: {
    fontSize: 14,
    fontWeight: "400",
    color: "#ffffff",
  },
  Icon: {
    height: 26,
    width: 26,
  },
  popularJobsContainer: {
    dispaly: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    height: 280,
    width: "100%",
    marginTop: 30,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: "center",
    marginBottom: 20,
  },
  popularJobsCardContainer: {
    display: "flex",
    flexDirection: "column",

    height: 240,
    width: "100%",
    paddingTop: 2,
    paddingBottom: 2,
    padding: 3,
  },
  popularJobcards: {
    width: "100%",
    height: 65,
    backgroundColor: "white",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 1,
    flexDirection: "row",
    borderRadius: 20,
  },
  popularJobsCardLogoContainer: {
    width: 60,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
  popularJobsPositionCompanyNameContainer: {
    width: 140,
    height: "100%",

    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  popularJobsPosition: {
    fontSize: 15,
    fontWeight: "700",
    color: "black",
    textAlign: "left",
  },
  popularJobsCompanyName: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
    opacity: 0.5,
    textAlign: "left",
  },
  popularJobsCardSalaryLocationContainer: {
    width: 100,
    height: "100%",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  popularJobsSalary: {
    fontSize: 13,
    fontWeight: "600",
    color: "black",
    textAlign: "left",
  },
  popularJobsCompanyLocation: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
    opacity: 0.5,
    textAlign: "left",
  },
});

export default Home;
